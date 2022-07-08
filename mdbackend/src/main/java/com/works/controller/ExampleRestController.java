package com.works.controller;

import com.works.entities.Example;
import com.works.services.ExampleService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/example")
@CrossOrigin(origins = "http://localhost:3000")
public class ExampleRestController {

    final ExampleService exampleService;

    public ExampleRestController(ExampleService exampleService) {
        this.exampleService = exampleService;
    }

    @PostMapping("/save")
    public ResponseEntity save(@Valid @RequestBody Example example) {
        return exampleService.save(example);
    }

    @GetMapping("/list")
    public ResponseEntity list() {
        return exampleService.list();
    }
}
