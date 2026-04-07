package com.example.demo.controller;

import com.example.demo.service.AliasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/aliases")
public class AliasController {
    @Autowired
    private AliasService aliasService;
    @GetMapping("/generate")
    public String getNewAlias(){
        return aliasService.generateRandomAlias();
    }
}
