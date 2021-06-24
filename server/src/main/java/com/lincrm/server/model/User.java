package com.lincrm.server.model;

import lombok.*;
import org.hibernate.Hibernate;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import javax.validation.constraints.Email;
import java.io.Serial;
import java.io.Serializable;
import java.util.Date;
import java.util.Objects;
import java.util.UUID;

@Getter
@Setter
@ToString
@RequiredArgsConstructor
@Table(name = "user")
@Entity
public class User implements Serializable {
    @Serial
    private static final long serialVersionUID = 2923382244739514882L;

    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    @Column(updatable = false, nullable = false)
    private UUID id;

    @Email
    private String email;

    private String password;

    private String firstname;

    private String lastname;

    @Column(name = "date_of_birth")
    private Date dateOfBirth;

    @Version
    private Integer version;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        User user = (User) o;

        return Objects.equals(id, user.id);
    }

    @Override
    public int hashCode() {
        return id.hashCode();
    }
}