package com.lincrm.server.service;

import com.lincrm.server.exception.NotFoundException;
import com.lincrm.server.model.Role;
import com.lincrm.server.model.User;
import com.lincrm.server.repository.RoleRepository;
import com.lincrm.server.repository.UserRepository;
import com.lincrm.server.util.WorkBookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.concurrent.ThreadLocalRandom;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;
    @Autowired
    RoleRepository roleRepository;
    @Autowired
    WorkBookService workBookService;

    @Autowired
    PasswordEncoder passwordEncoder;

    public User fetchUser(String email) {
        User user =
                userRepository.findUserByEmail(email)
                        .orElseThrow(() -> new NotFoundException("Could not find user"));

        return user;
    }

    public void createUsersFromXLSX(MultipartFile file, User admin) throws IOException, ParseException {
        List<Map<String, String>> data = workBookService.parseXLSXFile(file);
        Date currentDate = new Date();
        DateFormat df = new SimpleDateFormat("dd-MM-yyyy HH:mm");
        System.out.println("Creating User Records...");
        System.out.println("Found " + data.size() + " records in XLSX File");
        Role managerRole = roleRepository.findRoleByName("Manager");
        Role employeeRole = roleRepository.findRoleByName("Employee");

        List<User> supervisors = new ArrayList<>();
        int counter = 1;
        int superVisorCount = 0;
        for (Map<String, String> record : data) {
            User user = new User();
            user.setEmail(record.get("email"));
            user.setPassword(passwordEncoder.encode("testpass"));
            user.setPhoneNumber(((Long) Long.parseLong(record.get("phone"))).toString());

            user.setFirstname(record.get("first_name"));
            user.setLastname(record.get("last_name"));
            user.setGender(User.Gender.valueOf(record.get("gender").toUpperCase()));
            user.setDateOfBirth(df.parse(record.get("date_of_birth")));

            user.setJobTitle(record.get("job_title"));
            user.setDepartment(record.get("department"));
            user.setStatus(Boolean.parseBoolean(record.get("status")));

            user.setCreatedBy(admin);
            user.setCreatedOn(currentDate);

            if(superVisorCount < 5) {
                user.setRoles(Collections.singletonList(managerRole));
                user.setSupervisor(admin);
                superVisorCount++;
                user = userRepository.save(user);
                supervisors.add(user);
            }
            else {
                int randomNum = ThreadLocalRandom.current().nextInt(0, 5);
                user.setRoles(Collections.singletonList(employeeRole));
                user.setSupervisor(supervisors.get(randomNum));
                userRepository.save(user);
            }

            System.out.print("\r\r" + counter + "/" + data.size() + " records created...");
            counter++;
        }
        System.out.println("\nRecords Creation Complete...");
    }
}
