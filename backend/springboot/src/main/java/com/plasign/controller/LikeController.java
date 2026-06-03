package com.plasign.controller;

import com.plasign.model.Like;
import com.plasign.repository.LikeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/likes")
@CrossOrigin(origins = "*")
public class LikeController {

    @Autowired
    private LikeRepository likeRepository;

    // ❤️ LIKE PROPERTY
    @PostMapping("/add")
    public Like addLike(@RequestBody Like like) {
        return likeRepository.save(like);
    }

    // 📦 GET USER LIKES
    @GetMapping("/{email}")
    public List<Like> getLikes(@PathVariable String email) {
        return likeRepository.findByUserEmail(email);
    }
}