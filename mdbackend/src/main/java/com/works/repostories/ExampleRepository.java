package com.works.repostories;

import com.works.entities.Example;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ExampleRepository extends JpaRepository<Example, Long> {
    Optional<Example> findByProvinceEqualsIgnoreCaseAndDistrictEqualsIgnoreCase(String province, String district);

}