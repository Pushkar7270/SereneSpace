package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.time.LocalDateTime;

public class DoubtReply {
    private Integer replyID;
    private int parentId;
    private String authorId;
    private String replyText;
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
    private LocalDateTime createdAt;
    private String imageUrl;

    public DoubtReply(Integer replyID, int parentId, String authorId, String replyText, LocalDateTime createdAt, String imageUrl) {
        this.replyID = replyID;
        this.parentId = parentId;
        this.authorId = authorId;
        this.replyText = replyText;
        this.createdAt = createdAt;
        this.imageUrl = imageUrl;
    }
    public DoubtReply(){

    }

    public Integer getReplyID() {
        return replyID;
    }

    public int getParentId() {
        return parentId;
    }

    public String getAuthorId() {
        return authorId;
    }

    public String getReplyText() {
        return replyText;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setReplyID(Integer replyID) {
        this.replyID = replyID;
    }

    public void setParentId(int parentId) {
        this.parentId = parentId;
    }

    public void setAuthorId(String authorId) {
        this.authorId = authorId;
    }

    public void setReplyText(String replyText) {
        this.replyText = replyText;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
}
