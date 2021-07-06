package com.lincrm.server.service;

import com.lincrm.server.model.Activity;
import com.lincrm.server.model.User;
import com.lincrm.server.repository.ActivityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.UUID;

@Service
public class TrailService {

    @Autowired
    ActivityRepository repository;

    DateFormat dateFormat = new SimpleDateFormat("dd MMM yyyy HH:mm");


    public void createAccountTrail(String desc, UUID identifier, Date doneAt, User user) {
        Activity activity = new Activity();
        activity.setDescription(desc);
        activity.setIdentifier(identifier);
        activity.setDoneBy(user);
        activity.setDoneAt(doneAt);
        activity.setType(Activity.EntityType.ACCOUNT);

        repository.save(activity);
    }

    public void createLeadTrail(String desc, UUID identifier, Date doneAt, User user) {
        Activity activity = new Activity();
        activity.setDescription(desc);
        activity.setIdentifier(identifier);
        activity.setDoneBy(user);
        activity.setDoneAt(doneAt);
        activity.setType(Activity.EntityType.LEAD);

        repository.save(activity);
    }

    public void createContactsTrail(String desc, UUID identifier, Date doneAt, User user) {
        Activity activity = new Activity();
        activity.setDescription(desc);
        activity.setIdentifier(identifier);
        activity.setDoneBy(user);
        activity.setDoneAt(doneAt);
        activity.setType(Activity.EntityType.CONTACT);

        repository.save(activity);
    }

    public void createOpportunityTrail(String desc, UUID identifier, Date doneAt, User user) {
        Activity activity = new Activity();
        activity.setDescription(desc);
        activity.setIdentifier(identifier);
        activity.setDoneBy(user);
        activity.setDoneAt(doneAt);
        activity.setType(Activity.EntityType.OPPORTUNITY);

        repository.save(activity);
    }
}
