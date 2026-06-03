package com.plasign.controller;

import com.plasign.model.User;
import com.plasign.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    @Autowired
    private UserRepository repo;

    @PostMapping("/signup")
    public String signup(@RequestBody User user) {
        Optional<User> existingUser = repo.findByUsername(user.getUsername());
        if (existingUser.isPresent()) return "USERNAME_ALREADY_EXISTS";
        repo.save(user);
        return "SIGNUP_SUCCESS";
    }

    @PostMapping("/login")
    public String login(@RequestBody User user) {
        Optional<User> dbUser = repo.findByUsername(user.getUsername());
        if (dbUser.isPresent()) {
            if (dbUser.get().getPassword().equals(user.getPassword())) {
                return "SUCCESS";
            } else {
                return "WRONG_PASSWORD";
            }
        }
        return "USER_NOT_FOUND";
    }

    @PostMapping("/forgot-password")
    public String forgotPassword(@RequestBody Map<String, String> payload) {
        String email = payload.get("email");
        Optional<User> dbUser = repo.findByEmail(email);
        if (dbUser.isPresent()) {
            return "RESET_LINK_SENT_TO_" + email;
        } else {
            return "EMAIL_NOT_FOUND";
        }
    }
}
