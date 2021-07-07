package com.lincrm.server.controllers;

import com.lincrm.server.model.Role;
import com.lincrm.server.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BaseAPI {

    @Autowired
    RoleRepository roleRepository;

    @GetMapping(value = {"", "/"})
    public String home() {

        return "Server Running";
    }
}
