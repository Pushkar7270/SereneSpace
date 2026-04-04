package com.example.demo.service;

import com.example.demo.dao.DoubtReplyDao;
import com.example.demo.model.DoubtReply;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class DoubtReplyService {
    @Autowired
    private DoubtReplyDao doubtReplyDao;

    public boolean addReply(DoubtReply reply){
        return doubtReplyDao.saveReply(reply);
    }

    public List<DoubtReply> getRepliesForDoubt(int doubtId){
        return doubtReplyDao.getRepliesByDoubtId(doubtId);
    }
}
