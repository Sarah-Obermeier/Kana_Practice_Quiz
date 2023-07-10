package com.example.Capstone.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller

public class QuizController {
    @GetMapping("/quiz.html")
    public String template(Model model)
    {
        model.addAttribute("showTotal", 0);
        model.addAttribute("showCorrect", 0);
        model.addAttribute("showWrong", 0);
        return "quiz";

    }

    /*@ResponseBody
    public String test(@RequestParam(test = "test") String test))
    {
        return "test";
    }*/
}
