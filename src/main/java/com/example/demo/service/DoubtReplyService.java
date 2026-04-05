package com.example.demo.service;

import com.example.demo.dao.DoubtReplyDao;
import com.example.demo.model.DoubtReply;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;//importing List for handling collections of replies

@Service
public class DoubtReplyService {
    @Autowired
    private DoubtReplyDao doubtReplyDao;
    // adds a reply to a doubt.
    public boolean addReply(DoubtReply reply){
        return doubtReplyDao.saveReply(reply);
    }
    // fetches all replies for a specific doubt.
    public List<DoubtReply> getRepliesForDoubt(int doubtId){
        return doubtReplyDao.getRepliesByDoubtId(doubtId);
    }
}
