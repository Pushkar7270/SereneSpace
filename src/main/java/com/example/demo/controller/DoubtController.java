package com.example.demo.controller;

import com.example.demo.dao.DoubtDao;
import com.example.demo.model.Doubt;
import com.example.demo.service.DoubtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/doubts")

public class DoubtController {
    @Autowired
    private DoubtService doubtService;
    @PostMapping
    public boolean getDoubt(@RequestBody Doubt newDoubt){
        return doubtService.addDoubt((newDoubt));
    }
    @GetMapping
    public List<Doubt> AllDoubts(){
        return doubtService.getAllDoubts();
    }
}
