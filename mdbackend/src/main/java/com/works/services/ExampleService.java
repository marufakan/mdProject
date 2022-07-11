package com.works.services;

import com.works.entities.Example;
import com.works.repostories.ExampleRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Optional;

@Service
public class ExampleService {
    final ExampleRepository exampleRepository;

    public ExampleService(ExampleRepository exampleRepository) {
        this.exampleRepository = exampleRepository;
    }

    public ResponseEntity save(Example example) {
        Optional<Example> oExp=exampleRepository.findByProvinceEqualsIgnoreCaseAndDistrictEqualsIgnoreCase(example.getProvince(), example.getDistrict());
        Map<String, Object> hm = new LinkedHashMap<>();
        if(!oExp.isPresent()){
            hm.put("status", true);
            hm.put("result", exampleRepository.save(example) );
            return new ResponseEntity<>(hm, HttpStatus.OK);
        }
        else{
            hm.put("status", false);
            return new ResponseEntity<>(hm, HttpStatus.NOT_ACCEPTABLE);
        }

    }

    public ResponseEntity list() {
        Map<String, Object> hm = new LinkedHashMap<>();
        hm.put("status", true);
        hm.put("result", exampleRepository.findAll() );
        return new ResponseEntity(hm, HttpStatus.OK);
    }




}
