package com.lincrm.server.dto;

import java.util.List;

public class NewLeadPayload {

    public String firstname;

    public String lastname;

    public List<String> phone;
    public List<String> email;

    public String title;

    public String department;

    public String status;

    public String source;

    public String statusDesc;

    public String sourceDesc;

    public String referredBy;

    public AddressDTO address;

    public String account;

    public String assignedTo;

}
