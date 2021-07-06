package com.lincrm.server.service;

import com.lincrm.server.dto.NewLeadPayload;
import com.lincrm.server.exception.AlreadyExistsException;
import com.lincrm.server.model.Lead;
import com.lincrm.server.model.User;
import com.lincrm.server.repository.AccountRepository;
import com.lincrm.server.repository.LeadRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

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

    public void createNewLead(NewLeadPayload payload, User user) {
        Date currentDate = new Date();

        Lead lead = leadRepository
                .findLeadByFirstnameAndLastname(payload.firstname, payload.lastname).orElse(null);

        if(lead != null) throw new AlreadyExistsException("Lead Already Exists");
        User assignedTo = userService.fetchUser(payload.assignedTo);

        
    }

}
