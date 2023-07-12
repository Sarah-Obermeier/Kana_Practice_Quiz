package com.example.Capstone.model;

import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

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
    private Long userId;
    @Column(name = "email", nullable = false)
    private String email;
    @Column(name = "password", nullable = false, unique = true)
    private String password;
    
    @JoinTable (name = "user_roles",
            joinColumns = {@JoinColumn(name = "user_id", referencedColumnName = "userId")},
            inverseJoinColumns = {@JoinColumn(name = "role_id", referencedColumnName = "id")})
    public List<Role> roles = new ArrayList<>();



}
