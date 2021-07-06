package com.lincrm.server.dto;

import com.lincrm.server.model.Address;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.List;

public class NewAccountPayload {

    @NotNull
    @NotBlank
    public String name;

    public List<String> emails;

    @NotNull
    public AddressDTO billingAddress;
    public AddressDTO shippingAddress;

    @NotNull
    public String assignedTo;
}
