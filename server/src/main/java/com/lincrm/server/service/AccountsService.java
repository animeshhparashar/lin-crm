package com.lincrm.server.service;


import com.lincrm.server.dto.AccountDTO;
import com.lincrm.server.dto.AccountMin;
import com.lincrm.server.dto.AddressDTO;
import com.lincrm.server.dto.NewAccountPayload;
import com.lincrm.server.exception.AlreadyExistsException;
import com.lincrm.server.exception.NotFoundException;
import com.lincrm.server.model.Account;
import com.lincrm.server.model.Address;
import com.lincrm.server.model.User;
import com.lincrm.server.repository.AccountRepository;
import com.lincrm.server.repository.AddressRepository;
import com.lincrm.server.util.WorkBookService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

@Service
public class AccountsService {

    DateFormat dateFormat = new SimpleDateFormat("dd MMM yyyy HH:mm");
    @Autowired
    AccountRepository accountRepository;
    @Autowired
    AddressRepository addressRepository;

    @Autowired
    ModelMapper modelMapper;
    @Autowired
    TrailService trailService;
    @Autowired
    UserService userService;
    @Autowired
    WorkBookService workBookService;

    public AccountDTO fetchAccountDTO(Account account) {
        AccountDTO dto = modelMapper.map(account, AccountDTO.class);

        dto.billingAddress = AddressDTO.fromAddress(account.getBillingAddress());

        dto.shippingAddress = AddressDTO.fromAddress(account.getShippingAddress());

        dto.assignedTo = account.getAssignedTo().getFullName();
        dto.createdBy = account.getCreatedBy().getFullName();

        dto.createdOn = dateFormat.format(account.getCreatedOn());

        return dto;
    }

    public void createAccountsFromXLSX(MultipartFile file, User admin) throws IOException, ParseException {
        List<Map<String, String>> data = workBookService.parseXLSXFile(file);
        Date currentDate = new Date();
        DateFormat df = new SimpleDateFormat("");
        System.out.println("Creating Account Records...");
        System.out.println("Found " + data.size() + " records in XLSX File");

        int counter = 1;
        for(Map<String, String> record : data) {
            Account account = new Account();
            User assignedTo = userService.fetchUser(record.get("assignedTo"));

            account.setName(record.get("name"));
            account.setDomain(record.get("domain"));

            Address address = new Address();
            address.setLineA(record.get("line_a"));
            address.setLineB(record.get("line_b"));
            address.setCity(record.get("city"));
            address.setState(record.get("state"));
            address.setCountry(record.get("country"));
            address.setPostalCode(((Long) Long.parseLong(record.get("postal_code"))).toString());

            address = addressRepository.save(address);

            account.setBillingAddress(address);
            account.setShippingAddress(address);
            account.setAssignedTo(assignedTo);

            account.setCreatedBy(admin);
            account.setCreatedOn(currentDate);

            accountRepository.save(account);

            System.out.print("\r" + counter + "/" + data.size() + " records created...");
            counter++;
        }
        System.out.println("\nRecords Creation Complete...");
    }


    public void createNewAccount(NewAccountPayload payload, User user) {
        Date currentDate = new Date();

        Account account = accountRepository.findAccountByName(payload.name).orElse(null);
        if(account != null) throw new AlreadyExistsException("Account Already Exists");
        User assignedTo = userService.fetchUser(payload.assignedTo);

        account = new Account();

        account.setName(payload.name);
        account.setDomain(payload.domain);
        Address billingAddress = Address.fromDTO(payload.billingAddress);
        account.setBillingAddress(billingAddress);

        if(payload.shippingAddress != null &&
                payload.shippingAddress.lineA != null &&
                !payload.shippingAddress.lineA.equals("")) {

            Address shippingAddress = Address.fromDTO(payload.shippingAddress);
            account.setShippingAddress(shippingAddress);
        }
        else {
            account.setShippingAddress(billingAddress);
        }

        account.setAssignedTo(assignedTo);
        account.setCreatedBy(user);
        account.setCreatedOn(currentDate);

        account = accountRepository.save(account);

        trailService.createAccountTrail("Created New Account", account.getId(), currentDate, user);
    }

    public AccountDTO fetchAccountData(String id) {
        Account account = accountRepository.findAccountById(UUID.fromString(id))
                .orElseThrow(()-> new NotFoundException("Could find Account"));

        return fetchAccountDTO(account);
    }

    public List<AccountMin> listOfAccounts() {
        List<Account> accounts = accountRepository.findAll();
        List<AccountMin> result = new ArrayList<>();

        for (Account account : accounts) {
            AccountMin dto = new AccountMin();
            dto.id = account.getId().toString();
            dto.name = account.getName();
            dto.domain = account.getDomain();
            dto.assignedTo = account.getAssignedTo().getFullName();

            result.add(dto);
        }
        return result;
    }
}
