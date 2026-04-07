package com.example.demo.service;

import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class AliasService {
    private static final String[] adjectives = {"Serene", "Focused", "Curious", " Quiet", " Bright"};
    private static final String[] lastName = {"Seal", "Orca", "Fox", "Cat", "Wolf"};
    private final java.util.Random random = new Random();

    public String generateRandomAlias() {
        int adjectiveIndex = random.nextInt(adjectives.length);
        int nounIndex = random.nextInt(lastName.length);
        return adjectives[adjectiveIndex] + " " + lastName[nounIndex];
    }
}
