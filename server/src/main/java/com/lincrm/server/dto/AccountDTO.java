package com.lincrm.server.dto;

import java.util.List;

public class AccountDTO {

    public String id;

    public String name;

    public List<String> emails;

    public AddressDTO billingAddress;

    public AddressDTO shippingAddress;

    public String assignedTo;

    public String createdBy;

    public String createdOn;
}