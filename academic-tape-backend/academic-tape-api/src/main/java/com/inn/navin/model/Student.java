package com.inn.navin.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long studentId;

    private String name;
    private String birthdate;

    @ManyToOne
    @JoinColumn(name = "college_id")
    private College college;

    @ManyToOne
    @JoinColumn(name = "degree_id")
    private Degree degree;



    // Getters, setters, and other methods...
}





