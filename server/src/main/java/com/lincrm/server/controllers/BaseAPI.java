package com.lincrm.server.controllers;

import com.lincrm.server.model.User;
import com.lincrm.server.repository.UserRepository;
import com.lincrm.server.service.AccountsService;
import com.lincrm.server.service.LeadsService;
import com.lincrm.server.service.OpportunityService;
import com.lincrm.server.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.text.ParseException;


@RestController
public class BaseAPI {

    @Autowired
    UserService userService;

    @Autowired
    AccountsService accountsService;
    @Autowired
    LeadsService leadsService;
    @Autowired
    OpportunityService opportunityService;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    UserRepository userRepository;

    @GetMapping(value = {"", "/"})
    public String home() throws Exception {
        return "Server Running";
    }

    @PostMapping("/api/users/new-csv")
    public String createUsers(@RequestParam("file") MultipartFile file) throws IOException, ParseException {
        User user = userRepository.findUserByEmail("dave@lincrm.com").orElse(null);
        if(user != null) {
            opportunityService.createOpportunitiesXLSX(file, user);
        }

        return "Records Successfully Completed";
    }
}
