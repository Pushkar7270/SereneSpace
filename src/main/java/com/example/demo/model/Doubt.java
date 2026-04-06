package com.example.demo.model;
import java.time.LocalDateTime;

public class Doubt {
private Integer doubtId;
private String authorId;
private String questionText;
private String imageUrl;
private LocalDateTime createdAt;
private boolean isResolved;

    public Doubt(Integer doubtId, String authorId, String questionText, String imageUrl, LocalDateTime createdAt, boolean isResolved) {
        this.doubtId = doubtId;
        this.authorId = authorId;
        this.questionText = questionText;
        this.imageUrl = imageUrl;
        this.createdAt = createdAt;
        this.isResolved = isResolved;
    }

    public Doubt() {
    }

    public Integer getDoubtId() {
        return doubtId;
    }

    public String getAuthorId() {
        return authorId;
    }

    public String getQuestionText() {
        return questionText;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public boolean isResolved() {
        return isResolved;
    }

    public void setDoubtId(Integer doubtId) {
        this.doubtId = doubtId;
    }

    public void setAuthorId(String authorId) {
        this.authorId = authorId;
    }

    public void setQuestionText(String questionText) {
        this.questionText = questionText;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public void setResolved(boolean resolved) {
        isResolved = resolved;
    }
}