package com.lincrm.server.service;

import com.lincrm.server.exception.NotFoundException;
import com.lincrm.server.model.User;
import com.lincrm.server.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public User fetchUser(String email) {
        User user =
                userRepository.findUserByEmail(email)
                        .orElseThrow(() -> new NotFoundException("Could not find user"));

        return user;
    }
}
