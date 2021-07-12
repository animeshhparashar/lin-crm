package com.lincrm.server.dto;

import com.lincrm.server.model.Account;

public record AccountMin(
        String id,
        String name,
        String domain,
        String assignedTo
) {

    public static AccountMin fromAccount(Account account) {
        return new AccountMin(account.getId().toString(), account.getName(),account.getDomain(),account.getAssignedTo().getFullName());
    }


}
