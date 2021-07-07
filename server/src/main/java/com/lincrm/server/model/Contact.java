package com.lincrm.server.model;

import com.lincrm.server.util.enums.LeadSource;
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
@Table(name = "contact")
@Entity
public class Contact implements Serializable {
    @Serial
    private static final long serialVersionUID = -5086381526115055227L;

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

    @OneToOne
    @JoinColumn(name = "address", referencedColumnName = "id")
    private Address address;

    @Enumerated(value = EnumType.STRING)
    private LeadSource source;

    @ManyToOne
    private Account account;

    @ManyToOne
    private User assignedTo;

    @ManyToOne
    @JoinColumn(name = "created_by", referencedColumnName = "id")
    private User createdBy;

    @ManyToOne
    @JoinColumn(name = "last_modified_by", referencedColumnName = "id")
    private User lastModifiedBy;

    private Date createdOn;

    private Date lastModifiedOn;

    @Version
    private Integer version;


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        Contact contact = (Contact) o;

        return Objects.equals(id, contact.id);
    }

    @Override
    public int hashCode() {
        return id.hashCode();
    }
}