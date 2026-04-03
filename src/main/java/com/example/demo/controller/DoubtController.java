package com.example.demo.controller;

import com.example.demo.dao.DoubtDao;
import com.example.demo.model.Doubt;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/doubts")

public class DoubtController {
    private DoubtDao doubtDao = new DoubtDao();
    @PostMapping
    public boolean getDoubt(@RequestBody Doubt newDoubt){
        return doubtDao.saveDoubt(newDoubt);
    }
    @GetMapping
    public List<Doubt> AllDoubts(){
        return doubtDao.getAllDoubts();
    }
}
