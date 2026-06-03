package com.plasign.repository;

import com.plasign.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {

    // get all orders by latest first (optional)
    List<Order> findAllByOrderByIdDesc();
}