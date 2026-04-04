package com.example.demo.service;

import com.example.demo.dao.DoubtDao;
import com.example.demo.model.Doubt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DoubtService {
    @Autowired
    private DoubtDao doubtDao;
    public boolean addDoubt(Doubt doubt){
        return doubtDao.saveDoubt(doubt);
    }
    public List<Doubt> getAllDoubts(){
        return doubtDao.getAllDoubts();
    }
}
