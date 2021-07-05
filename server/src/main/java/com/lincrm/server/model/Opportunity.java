package com.lincrm.server.model;

import com.lincrm.server.util.enums.LeadSource;
import com.lincrm.server.util.enums.OppStage;
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
@Table(name = "opportunity")
@Entity
public class Opportunity implements Serializable {
    public static enum Type {
        EXISTING_BUSINESS,
        NEW_BUSINESS
    }


    @Serial
    private static final long serialVersionUID = 1430100217686174605L;
    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    @Column(updatable = false, nullable = false)
    private UUID id;

    private String name;

    private Double amount;

    private Double probability;

    @Enumerated(value = EnumType.STRING)
    private Type type;

    @Enumerated(value = EnumType.STRING)
    private OppStage stage;

    @Enumerated(value = EnumType.STRING)
    private LeadSource source;

    private String description;

    @ManyToOne
    private Account account;

    @ManyToOne
    private User assignedTo;

    @Version
    private Integer version;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        Opportunity that = (Opportunity) o;

        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id.hashCode();
    }
}