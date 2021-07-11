package com.lincrm.server.security.model;

import com.lincrm.server.model.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.io.Serial;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

public class UserSecurityDetail  implements UserDetails {
    @Serial
    private static final long serialVersionUID = 1705217253728228051L;

    private final String firstname;
    private final String lastname;

    private final String username;
    private final String password;
    private final Boolean status;
    private final List<GrantedAuthority> authorities;

    public UserSecurityDetail(User user) {
        this.username = user.getEmail();
        this.password = user.getPassword();

        this.status = user.getStatus();
        this.firstname = user.getFirstname();
        this.lastname = user.getLastname();

        this.authorities = user.getRoles().stream()
                .map(role -> new SimpleGrantedAuthority(role.getName())).collect(Collectors.toList());
    }

    public String getFirstname() {
        return firstname;
    }

    public String getLastname() {
        return lastname;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return false;
    }

    @Override
    public boolean isAccountNonLocked() {
        return false;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return false;
    }

    @Override
    public boolean isEnabled() {
        return status;
    }
}
