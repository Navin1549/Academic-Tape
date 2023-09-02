package com.inn.navin.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class Degree {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long degreeId;

    private String name;
    private int durationYears;

    public Long getDegreeId() {
        return degreeId;
    }
    public void setDegreeId(Long degreeId) {
        this.degreeId = degreeId;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public int getDurationYears() {
        return durationYears;
    }
    public void setDurationYears(int durationYears) {
        this.durationYears = durationYears;
    }
    @Override
    public String toString() {
        return "Degree [degreeId=" + degreeId + ", name=" + name + ", durationYears=" + durationYears + "]";
    }




    

    // Getters, setters, and other methods...
}
