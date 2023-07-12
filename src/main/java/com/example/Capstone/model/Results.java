package com.example.Capstone.model;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Getter
@Setter
@NoArgsConstructor
@Data
@Entity
@Table(name = "results")
public class Results {
    @Column(name = "correct")
    private int correct;
    @Column(name = "wrong")
    private int wrong;
    @Column(name = "total")
    private int total;

}
