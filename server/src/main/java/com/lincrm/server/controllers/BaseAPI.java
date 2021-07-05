package com.lincrm.server.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class BaseAPI {

    @RequestMapping(value = {"", "/"})
    public String home() {
        return "Server Running";
    }
}
