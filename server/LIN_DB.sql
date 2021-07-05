create table user
(
    id            binary(255) not null,
    date_of_birth datetime,
    email         varchar(255),
    firstname     varchar(255),
    lastname      varchar(255),
    password      varchar(255),
    version       integer,
    primary key (id)
) engine=InnoDB;

create table role
(
    id          binary(255) not null,
    description varchar(255),
    name        varchar(255),
    primary key (id)
) engine=InnoDB;

create table account
(
    id                  binary(255) not null,
    name                varchar(255),
    version             integer,
    assigned_to_id      binary(255),
    billing_address_id  binary(255),
    shipping_address_id binary(255),
    primary key (id)
) engine=InnoDB;
create table account_emails
(
    account_id binary(255) not null,
    emails     varchar(255)
) engine=InnoDB;
create table address
(
    id          binary(255) not null,
    city        varchar(255),
    country     varchar(255),
    linea       varchar(255),
    lineb       varchar(255),
    postal_code varchar(255),
    state       varchar(255),
    version     integer,
    primary key (id)
) engine=InnoDB;

create table contact
(
    id             binary(255) not null,
    department     varchar(255),
    firstname      varchar(255),
    lastname       varchar(255),
    source         varchar(255),
    title          varchar(255),
    version        integer,
    account_id     binary(255),
    address        binary(255),
    assigned_to_id binary(255),
    primary key (id)
) engine=InnoDB;
create table contact_email
(
    contact_id binary(255) not null,
    email      varchar(255)
) engine=InnoDB;
create table contact_phone
(
    contact_id binary(255) not null,
    phone      varchar(255)
) engine=InnoDB;
create table lead
(
    id                 binary(255) not null,
    department         varchar(255),
    firstname          varchar(255),
    lastname           varchar(255),
    referred_by        varchar(255),
    source             varchar(255),
    source_description varchar(255),
    status             varchar(255),
    title              varchar(255),
    account_id         binary(255),
    address            binary(255),
    assigned_to_id     binary(255),
    primary key (id)
) engine=InnoDB;
create table lead_email
(
    lead_id binary(255) not null,
    email   varchar(255)
) engine=InnoDB;
create table lead_phone
(
    lead_id binary(255) not null,
    phone   varchar(255)
) engine=InnoDB;
create table opportunity
(
    id             binary(255) not null,
    amount         double precision,
    description    varchar(255),
    name           varchar(255),
    probability    double precision,
    source         varchar(255),
    stage          varchar(255),
    type           varchar(255),
    version        integer,
    account_id     binary(255),
    assigned_to_id binary(255),
    primary key (id)
) engine=InnoDB;

create table status_description
(
    lead_id     binary(255) not null,
    description varchar(255),
    status      varchar(255) not null,
    primary key (lead_id, status)
) engine=InnoDB;

alter table account
    add constraint FK9ex238im8bticq09tpmfuj5tv foreign key (assigned_to_id) references user (id)
alter table account
    add constraint FK9od7msjr5eu5n33mfh94jnjs3 foreign key (billing_address_id) references address (id)
alter table account
    add constraint FKq59x6ijpjhlhklvejgsi1elpl foreign key (shipping_address_id) references address (id)
alter table account_emails
    add constraint FKndgrpna8udiqcdakne3ioencj foreign key (account_id) references account (id)
alter table contact
    add constraint FK3ctagodg5h629t8ltnam39l5w foreign key (account_id) references account (id)
alter table contact
    add constraint FK456ee7eptfwxg3hkn8gqnly8x foreign key (address) references address (id)
alter table contact
    add constraint FK50el9enfsqfqedhik0g1k4lst foreign key (assigned_to_id) references user (id)
alter table contact_email
    add constraint FKjhb6oolv2p95xsci34vuoiq00 foreign key (contact_id) references contact (id)
alter table contact_phone
    add constraint FKjlssyu3cvwtmtimsa8vx9nh5 foreign key (contact_id) references contact (id)
alter table lead
    add constraint FK64eaeh91o5wg9qf2fslh6q9jp foreign key (account_id) references account (id)
alter table lead
    add constraint FK8pi3tyag2ugk3p5dm3fbipno4 foreign key (address) references address (id)
alter table lead
    add constraint FK773ryy076andc4u63wafhw01v foreign key (assigned_to_id) references user (id)
alter table lead_email
    add constraint FKbeqde0t2qtn5q7b845is3ni2a foreign key (lead_id) references lead (id)
alter table lead_phone
    add constraint FKce3a8ksic0jll8yf70l95g6wl foreign key (lead_id) references lead (id)
alter table opportunity
    add constraint FK9mvhqgny93la8u8k2gd531nex foreign key (account_id) references account (id)
alter table opportunity
    add constraint FK6y6vo2yykk17vqvn8fusuenqf foreign key (assigned_to_id) references user (id)
alter table status_description
    add constraint FK7ftxfffwk94qqvi3yd8p4xcwk foreign key (lead_id) references lead (id)
