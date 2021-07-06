package com.lincrm.server.model;

import com.lincrm.server.dto.AddressDTO;
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
@Table(name = "address")
@Entity
public class Address implements Serializable {
    @Serial
    private static final long serialVersionUID = -5752411368884639362L;

    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    @Column(updatable = false, nullable = false, columnDefinition = "BINARY(16)")
    private UUID id;

    private String lineA;

    private String lineB;

    private String city;

    private String state;

    private String country;

    private String postalCode;

    @Version
    private Integer version;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        Address address = (Address) o;

        return Objects.equals(id, address.id);
    }

    @Override
    public int hashCode() {
        return id.hashCode();
    }


    public Address(String lineA, String lineB, String city, String state, String country, String postalCode) {
        this.lineA = lineA;
        this.lineB = lineB;
        this.city = city;
        this.state = state;
        this.country = country;
        this.postalCode = postalCode;
        this.version = version;
    }

    public static Address fromDTO(AddressDTO dto) {
        return new Address(dto.lineA, dto.lineB, dto.city, dto.state, dto.country, dto.postalCode);

    }
}