package com.example.demo.controller;

import com.example.demo.dao.DoubtDao;
import com.example.demo.model.Doubt;
import com.example.demo.service.DoubtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;// import list of doubts

@RestController// returns the jason data directly to the client
@RequestMapping("/api/doubts")//base url for all the endpoints in this controller

public class DoubtController {
    @Autowired
    private DoubtService doubtService;// injects the DoubtService to handle doubts.
    @PostMapping
    public boolean getDoubt(@RequestBody Doubt newDoubt){//handles request for new doubt
        return doubtService.addDoubt((newDoubt));
    }
    @GetMapping
    public List<Doubt> AllDoubts(){//returns doubt as a list of doubts
        return doubtService.getAllDoubts();
    }
}
