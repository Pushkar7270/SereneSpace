package com.example.demo.controller;

import com.example.demo.model.PromptRequest;
import com.example.demo.service.PromtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/prompts")
public class PromptController {
    @Autowired
    private PromtService promptService;
    @PostMapping("/generate")
    public String generatePrompt(@RequestBody PromptRequest request){
        String generatedText = promptService.generatePromptString(request);
        return generatedText;
    }
}
