package com.example.Capstone.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller

public class QuizController {
    @GetMapping("/quiz.html")
    public String template(Model model)
    {
        return "quiz";
    }

    /*@ResponseBody
    public String test(@RequestParam(test = "test") String test))
    {
        return "test";
    }*/
}
