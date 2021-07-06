package com.lincrm.server.model;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serial;
import java.io.Serializable;
import java.util.Date;
import java.util.UUID;


@Getter
@Setter
@ToString
@RequiredArgsConstructor
@Table(name = "activity_trail")
@Entity
public class Activity implements Serializable {

    @Serial
    private static final long serialVersionUID = 7955995969079375635L;
    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    @Column(updatable = false, nullable = false, columnDefinition = "BINARY(16)")
    private UUID id;

    public enum EntityType {
        ACCOUNT, LEAD, CONTACT, OPPORTUNITY
    }

    @Column(name = "description", nullable = false)
    private String description;

    @Column(name = "type", nullable = false)
    @Enumerated(value = EnumType.STRING)
    private EntityType type;

    @Column(name = "identifier", updatable = false, nullable = false, columnDefinition = "BINARY(16)")
    private UUID identifier;

    @ManyToOne
    @JoinColumn(name = "done_by", referencedColumnName = "id", nullable = false)
    private User doneBy;

    @Column(name = "done_at", nullable = false)
    private Date doneAt;
}
