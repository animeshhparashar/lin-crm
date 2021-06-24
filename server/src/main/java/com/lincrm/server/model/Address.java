package com.lincrm.server.model;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serial;
import java.io.Serializable;
import java.util.UUID;

@Table(name = "address")
@Entity
public class Address implements Serializable {
    @Serial
    private static final long serialVersionUID = -5752411368884639362L;

    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    @Column(updatable = false, nullable = false)
    private UUID id;

    private String lineA;

    private String lineB;

    private String city;

    private String state;

    private String country;

    private String postalCode;



}