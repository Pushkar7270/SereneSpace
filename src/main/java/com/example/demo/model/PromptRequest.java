package com.example.demo.model;

public class PromptRequest {
    private String context;
    private String imageUrl;
    private String responseType;
    private String length;
    private String extraInstructions;

    public PromptRequest() {
    }

    public PromptRequest(String context, String imageUrl, String responseType, String length, String extraInstructions) {
        this.context = context;
        this.imageUrl = imageUrl;
        this.responseType = responseType;
        this.length = length;
        this.extraInstructions = extraInstructions;
    }

    public String getContext() {
        return context;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public String getResponseType() {
        return responseType;
    }

    public String getLength() {
        return length;
    }

    public String getExtraInstructions() {
        return extraInstructions;
    }

    public void setContext(String context) {
        this.context = context;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public void setResponseType(String responseType) {
        this.responseType = responseType;
    }

    public void setLength(String length) {
        this.length = length;
    }

    public void setExtraInstructions(String extraInstructions) {
        this.extraInstructions = extraInstructions;
    }
}

