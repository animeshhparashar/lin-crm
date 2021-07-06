package com.lincrm.server.dto;

import com.lincrm.server.model.Address;

public class AddressDTO {

    public String lineA;

    public String lineB;

    public String city;

    public String state;

    public String country;

    public String postalCode;

    public AddressDTO(String lineA, String lineB, String city, String state, String country, String postalCode) {
        this.lineA = lineA;
        this.lineB = lineB;
        this.city = city;
        this.state = state;
        this.country = country;
        this.postalCode = postalCode;
    }

    public static AddressDTO fromAddress(Address address) {
        return new AddressDTO(
                address.getLineA(),
                address.getLineB(),
                address.getCity(),
                address.getState(),
                address.getCountry(),
                address.getPostalCode());
    }
}
