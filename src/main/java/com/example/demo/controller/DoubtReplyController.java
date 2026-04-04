package com.example.demo.controller;

import com.example.demo.model.DoubtReply;
import com.example.demo.service.DoubtReplyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;




@RestController
@RequestMapping("/api/replies")
public class DoubtReplyController {
    @Autowired
    private DoubtReplyService doubtReplyService;
    @PostMapping
    public boolean addReply(@RequestBody DoubtReply newReply){
        newReply.setCreatedAt(java.time.LocalDateTime.now());
        return doubtReplyService.addReply(newReply);
    }
    @GetMapping("/doubt/{doubtId}")
    public List<DoubtReply> getReplies(@PathVariable  int doubtId){

        return doubtReplyService.getRepliesForDoubt(doubtId);
    }
}
