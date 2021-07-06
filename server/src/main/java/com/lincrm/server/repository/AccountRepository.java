package com.lincrm.server.repository;

import com.lincrm.server.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface AccountRepository extends JpaRepository<Account, UUID>, JpaSpecificationExecutor<Account> {


    Optional<Account> findAccountByName(String name);

    Optional<Account> findAccountById(UUID id);
}