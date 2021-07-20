package com.lincrm.server.service;

import com.lincrm.server.dto.LeadsMin;
import com.lincrm.server.dto.NewLeadPayload;
import com.lincrm.server.exception.AlreadyExistsException;
import com.lincrm.server.exception.NotFoundException;
import com.lincrm.server.model.Account;
import com.lincrm.server.model.Address;
import com.lincrm.server.model.Lead;
import com.lincrm.server.model.User;
import com.lincrm.server.repository.AccountRepository;
import com.lincrm.server.repository.AddressRepository;
import com.lincrm.server.repository.LeadRepository;
import com.lincrm.server.util.WorkBookService;
import com.lincrm.server.util.enums.LeadSource;
import com.lincrm.server.util.enums.LeadStatus;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Collections;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class LeadsService {

    DateFormat dateFormat = new SimpleDateFormat("dd MMM yyyy HH:mm");
    @Autowired
    LeadRepository leadRepository;

    @Autowired
    ModelMapper modelMapper;
    @Autowired
    TrailService trailService;
    @Autowired
    UserService userService;
    @Autowired
    AccountsService accountsService;
    @Autowired
    WorkBookService workBookService;
    @Autowired
    AddressRepository addressRepository;

    public void createNewLead(NewLeadPayload payload, User user) {
        Date currentDate = new Date();

        Lead lead = leadRepository
                .findLeadByFirstnameAndLastname(payload.firstname(), payload.lastname()).orElse(null);

        if(lead != null) throw new AlreadyExistsException("Lead Already Exists");
        User assignedTo = userService.fetchUser(payload.assignedTo());
    }

    public void createLeadsFromXLSX(MultipartFile file, User admin) throws IOException {
        List<Map<String, String>> data = workBookService.parseXLSXFile(file);
        Date currentDate = new Date();

        System.out.println("Creating Leads Records...");
        System.out.println("Found " + data.size() + " records in XLSX File");

        int counter = 1;
        for(Map<String, String> record : data) {
            Account account = accountsService.fetchAccount(record.get("account"));
            User user = userService.fetchUser(record.get("assignedTo"));
            Lead lead = new Lead();

            lead.setFirstname(record.get("first_name"));
            lead.setLastname(record.get("last_name"));
            lead.setPhone(Collections.singletonList(record.get("phone")));

            lead.setEmail(Collections.singletonList(record.get("email")));

            lead.setTitle(record.get("title"));
            lead.setDepartment(record.get("department"));
            String status = record.get("status").toUpperCase().replaceAll(" ", "_");
            String source = record.get("lead_source").toUpperCase().replaceAll(" ", "_");
            lead.setStatus(LeadStatus.valueOf(status));
            lead.setSource(LeadSource.valueOf(source));

            if(record.get("referred_by") != null && !record.get("referred_by").equals("NaN")) {
                lead.setReferredBy(record.get("referred_by"));
            }

            lead.setAccount(account);
            lead.setAssignedTo(user);

            Address address = new Address();

            if(Integer.parseInt(record.get("line_a")) == 0) {
                address.setLineA("13");
            }
            else {
                address.setLineA(record.get("line_a"));
            }

            address.setLineB(record.get("line_b"));
            address.setCity(record.get("city"));
            address.setState(record.get("state"));
            address.setCountry(record.get("country"));
            address.setPostalCode(record.get("postal_code"));

            address = addressRepository.save(address);

            lead.setAddress(address);

            lead.setCreatedBy(admin);
            lead.setCreatedOn(currentDate);

            leadRepository.save(lead);

            System.out.print("\r\r" + counter + "/" + data.size() + " records created...");
            counter++;
        }

        System.out.println("\nRecords Creation Complete...");
    }

    public Lead fetchLeadInfoByName(String firstname, String lastname) {
        return leadRepository.findLeadByFirstnameAndLastname(firstname, lastname)
                .orElseThrow(()-> new NotFoundException("Lead not found"));
    }

    public List<LeadsMin> getAllLeads() {
        return leadRepository.findAll().stream()
                .map(LeadsMin::fromLead).collect(Collectors.toList());
    }

}
