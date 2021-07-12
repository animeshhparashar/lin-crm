package com.lincrm.server.dto;

import com.lincrm.server.model.Address;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.List;

public record NewAccountPayload(
        @NotNull
        @NotBlank
        String name,
        String domain,
        @NotNull
        AddressDTO billingAddress,
        AddressDTO shippingAddress,
        @NotNull
        String assignedTo
) {
}
