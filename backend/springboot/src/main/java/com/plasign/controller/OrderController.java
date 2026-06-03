package com.plasign.controller;

import com.plasign.model.Order;
import com.plasign.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "*")
public class OrderController {

    @Autowired
    private OrderRepository orderRepository;

    // 🛒 PLACE ORDER (SAVE TO MYSQL)
    @PostMapping("/place")
    public Order placeOrder(@RequestBody Order order) {
        return orderRepository.save(order);
    }

    // 📦 GET ALL ORDERS
    @GetMapping("/all")
    public List<Order> getAllOrders() {
        return orderRepository.findAllByOrderByIdDesc();
    }
}