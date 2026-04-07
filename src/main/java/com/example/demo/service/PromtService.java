package com.example.demo.service;

import com.example.demo.model.PromptRequest;
import org.springframework.stereotype.Service;

@Service
public class PromtService {
    public String generatePromptString(PromptRequest request){
        StringBuilder promptBuilder = new StringBuilder();
        // Append Context (Task 1, Point 3)
        promptBuilder.append("Task: ")
                .append(request.getContext() != null && !request.getContext().isEmpty() ? request.getContext() : "None")
                .append("\n");
        promptBuilder.append("Response Type: ")
                .append(request.getResponseType() != null && !request.getResponseType().isEmpty() ? request.getResponseType() : "None")
                .append("\n");
        promptBuilder.append("Length: ")
                .append(request.getLength() != null && !request.getLength().isEmpty() ? request.getLength() : "None")
                .append("\n");

        promptBuilder.append("Extra Instructions: ")
                .append(request.getExtraInstructions() != null && !request.getExtraInstructions().isEmpty() ? request.getExtraInstructions() : "None")
                .append("\n");
        promptBuilder.append("Image Context: ")
                .append(request.getImageUrl() != null && !request.getImageUrl().isEmpty() ? request.getImageUrl() : "None");
        String prompt =promptBuilder.toString();
        return prompt;
    }
}
