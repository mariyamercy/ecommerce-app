package com.plasign.controller;

import com.plasign.model.Property;
import com.plasign.repository.PropertyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@RestController
@RequestMapping("/api/properties")
@CrossOrigin(origins = "*")
public class PropertyController {

    @Autowired
    private PropertyRepository repository;

    // 📤 UPLOAD PROPERTY
    @PostMapping("/upload")
    public ResponseEntity<?> uploadProperty(
            @RequestParam MultipartFile file,
            @RequestParam String caption,
            @RequestParam String price,
            @RequestParam String details
    ) {
        try {
            String uploadDir = System.getProperty("user.dir") + "/uploads";

            File dir = new File(uploadDir);
            if (!dir.exists()) dir.mkdirs();

            String fileName = System.currentTimeMillis() + "_" + file.getOriginalFilename();
            Path filePath = Paths.get(uploadDir, fileName);

            Files.write(filePath, file.getBytes());

            Property p = new Property();
            p.setCaption(caption);
            p.setPrice(price);
            p.setDetails(details);

            // 💥 IMPORTANT FIX (IMAGE URL)
            p.setImageUrl("/uploads/" + fileName);

            repository.save(p);

            return ResponseEntity.ok(p);

        } catch (Exception e) {
            return ResponseEntity.status(500).body("Upload Failed: " + e.getMessage());
        }
    }

    // 📥 GET ALL
    @GetMapping("/all")
    public List<Property> getAll() {
        return repository.findAll();
    }

    // ❌ DELETE
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        repository.deleteById(id);
        return ResponseEntity.ok("Deleted");
    }
}