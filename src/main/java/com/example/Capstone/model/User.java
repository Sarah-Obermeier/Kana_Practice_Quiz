package com.example.Capstone.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table
public class User{
    @Id
    @GeneratedValue( strategy= GenerationType.IDENTITY )
    private int userId;
    @Column(name = "email")
    private String email;
    @Column(name = "correct")
    private int correct;
    @Column(name = "wrong")
    private int wrong;
    @Column(name = "total")
    private int total;
}
