package com.lincrm.server.model;

import com.lincrm.server.util.enums.LeadSource;
import com.lincrm.server.util.enums.LeadStatus;
import lombok.*;
import org.hibernate.Hibernate;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serial;
import java.io.Serializable;
import java.util.*;

@Getter
@Setter
@ToString
@RequiredArgsConstructor
@Table(name = "lead")
@Entity
public class Lead implements Serializable {
    @Serial
    private static final long serialVersionUID = -314163508744858704L;

    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    @Column(updatable = false, nullable = false, columnDefinition = "BINARY(16)")
    private UUID id;

    private String firstname;

    private String lastname;

    @ElementCollection
    private List<String> phone = new ArrayList<>();

    @ElementCollection
    private List<String> email = new ArrayList<>();

    private String title;

    private String department;

    @Enumerated(value = EnumType.STRING)
    private LeadStatus status;

    @Enumerated(value = EnumType.STRING)
    private LeadSource source;

    @ElementCollection
    @MapKeyColumn(name = "status")
    @Column(name = "description")
    @CollectionTable(name = "status_description", joinColumns = @JoinColumn(name = "lead_id"))
    private Map<String, String> statusDescription;

    private String sourceDescription;

    private String referredBy;

    @OneToOne
    @JoinColumn(name = "address", referencedColumnName = "id")
    private Address address;

    @ManyToOne
    private Account account;

    @ManyToOne
    private User assignedTo;


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        Lead lead = (Lead) o;

        return Objects.equals(id, lead.id);
    }

    @Override
    public int hashCode() {
        return id.hashCode();
    }
}