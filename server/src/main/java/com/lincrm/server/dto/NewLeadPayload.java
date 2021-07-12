package com.lincrm.server.dto;

import java.util.List;

public record NewLeadPayload(
        String firstname,
        String lastname,
        List<String> phone,
        List<String> email,
        String title,
        String department,
        String status,
        String source,
        String statusDesc,
        String sourceDesc,
        String referredBy,
        AddressDTO address,
        String account,
        String assignedTo
) {

}
