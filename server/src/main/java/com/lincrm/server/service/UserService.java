package com.lincrm.server.service;

import com.lincrm.server.exception.NotFoundException;
import com.lincrm.server.model.User;
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
import java.util.Date;
import java.util.List;
import java.util.Map;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;
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
        DateFormat df = new SimpleDateFormat("");
        System.out.println("Creating User Records...");
        System.out.println("Found " + data.size() + " records in XLSX File");

        int counter = 1;
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

            userRepository.save(user);

            System.out.print("\r" + counter + "/" + data.size() + " records created...");
            counter++;
        }
        System.out.println("\nRecords Creation Complete...");
    }
}
