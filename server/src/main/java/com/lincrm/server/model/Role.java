package com.lincrm.server.model;

import lombok.*;
import org.hibernate.Hibernate;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serial;
import java.io.Serializable;
import java.util.Objects;
import java.util.UUID;


@Getter
@Setter
@ToString
@RequiredArgsConstructor
@NoArgsConstructor
@Table(name = "role")
@Entity
public class Role implements Serializable {
    @Serial
    private static final long serialVersionUID = -7664411999216154375L;

    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    @Column(updatable = false, nullable = false)
    private UUID id;

    private String name;

    private String description;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        Role role = (Role) o;

        return Objects.equals(id, role.id);
    }

    @Override
    public int hashCode() {
        return id.hashCode();
    }
}