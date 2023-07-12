package com.example.Capstone.model;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "users")
public class User{
    @Id
    @GeneratedValue( strategy= GenerationType.IDENTITY )
    private int userId;
    @Column(name = "email")
    private String email;
    @Column(name = "password", unique = true, nullable = false)
    private String password;
}