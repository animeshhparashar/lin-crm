package com.lincrm.server.dto;

import com.lincrm.server.model.Account;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.List;

public record AccountDTO(
         String id,
         String name,
         String domain,
         AddressDTO billingAddress,
         AddressDTO shippingAddress,
         String assignedTo,
         String createdBy,
         String createdOn
) {

    public static AccountDTO fromAccount(Account account) {
        DateFormat dateFormat = new SimpleDateFormat("dd MMM yyyy HH:mm");
        return new AccountDTO(
                account.getId().toString(),
                account.getName(),
                account.getDomain(),
                AddressDTO.fromAddress(account.getBillingAddress()),
                AddressDTO.fromAddress(account.getShippingAddress()),
                account.getAssignedTo().getFullName(),
                account.getCreatedBy().getFullName(), dateFormat.format(account.getCreatedOn()));

    }
}
