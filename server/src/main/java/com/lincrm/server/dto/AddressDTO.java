package com.lincrm.server.dto;

import com.lincrm.server.model.Address;

public record AddressDTO (
     String lineA,
     String lineB,
     String city,
     String state,
     String country,
     String postalCode) {
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
