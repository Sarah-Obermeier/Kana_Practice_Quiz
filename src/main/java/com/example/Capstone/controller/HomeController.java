package com.example.Capstone.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
    @GetMapping("/")
    public String landing(Model model){
        return "landing";
    }
    @GetMapping("/landing.html")
    public String landing2(Model model) {return "landing";}
}
