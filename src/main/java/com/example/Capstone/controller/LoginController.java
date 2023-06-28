package com.example.Capstone.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
//@RequestMapping("/")
public class LoginController {
    @GetMapping("/login.html")
    public String template(Model model)
    {
        return "login";
    }
}