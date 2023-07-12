package com.example.Capstone.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Setter
@Getter
@NoArgsConstructor
@ToString
@Table(name = "roles")
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    @Column (nullable=false, unique=true)
    String email;
    @ManyToMany(mappedBy = "roles")
    List<User> users = new ArrayList<>();

    public Role(Long id, String email, List<User> users)
    {
        this.id = id;
        this.email = email;
        this.users = users;
    }
}
