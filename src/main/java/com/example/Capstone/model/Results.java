package com.example.Capstone.model;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "results")
public class Results{
    @Id
    @GeneratedValue( strategy= GenerationType.IDENTITY )
    private int id;
    @Column(name = "email")
    private String email;
    @Column(name = "correct")
    private int correct;
    @Column(name = "wrong")
    private int wrong;
    @Column(name = "total")
    private int total;
}
