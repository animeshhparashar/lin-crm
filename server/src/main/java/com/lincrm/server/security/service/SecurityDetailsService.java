package com.lincrm.server.security.service;

import com.lincrm.server.model.User;
import com.lincrm.server.repository.UserRepository;
import com.lincrm.server.security.model.UserSecurityDetail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class SecurityDetailsService implements UserDetailsService {

    @Autowired
    UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

        User user = userRepository.findUserByEmail(email)
                .orElseThrow(()-> new UsernameNotFoundException("Could not find user"));

        UserSecurityDetail detail = new UserSecurityDetail(user);

        return detail;
    }
}
