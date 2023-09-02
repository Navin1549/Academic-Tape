package com.inn.navin.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class College {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long collegeId;

    private String name;
    private String location;
    
    public Long getCollegeId() {
        return collegeId;
    }
    public void setCollegeId(Long collegeId) {
        this.collegeId = collegeId;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getLocation() {
        return location;
    }
    public void setLocation(String location) {
        this.location = location;
    }

    @Override
    public String toString() {
        return "College [collegeId=" + collegeId + ", name=" + name + ", location=" + location + "]";
    }   

    // Getters, setters, and other methods...
}
