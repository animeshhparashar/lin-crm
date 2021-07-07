package com.lincrm.server.service;

import com.lincrm.server.exception.NotFoundException;
import com.lincrm.server.model.User;
import com.lincrm.server.repository.UserRepository;
import com.lincrm.server.util.WorkBookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.Map;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;
    @Autowired
    WorkBookService workBookService;

    public User fetchUser(String email) {
        User user =
                userRepository.findUserByEmail(email)
                        .orElseThrow(() -> new NotFoundException("Could not find user"));

        return user;
    }

    public void createUsersFromXLSX(MultipartFile file, User admin) throws IOException {
        List<Map<String, String>> data = workBookService.parseXLSXFile(file);
        Date currentDate = new Date();
        System.out.println("Creating User Records...");
        System.out.println("Found " + data.size() + " records in XLSX File");

        for (Map<String, String> record : data) {
            User user = new User();
            user.setFirstname(record.get("first_name"));
            user.setLastname(record.get("last_name"));
            user.setGender(User.Gender.);
        }
    }
}
