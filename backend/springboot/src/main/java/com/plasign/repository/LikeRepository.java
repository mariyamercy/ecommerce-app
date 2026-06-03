package com.plasign.repository;

import com.plasign.model.Like;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface LikeRepository extends JpaRepository<Like, Long> {

    List<Like> findByUserEmail(String userEmail);
}