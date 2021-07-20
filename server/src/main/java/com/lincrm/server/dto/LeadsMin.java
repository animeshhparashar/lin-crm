package com.lincrm.server.dto;

import com.lincrm.server.model.Lead;

public record LeadsMin(
        String fullname,
        String title,
        String department,
        String status,
        String account,
        String assignedto
) {

    public static LeadsMin fromLead(Lead lead) {
        return new LeadsMin(
                lead.getFullname(),
                lead.getTitle(),
                lead.getDepartment(),
                lead.getStatus().toString(),
                lead.getAccount().getName(),
                lead.getAssignedTo().getFullName()
                );
    }
}
