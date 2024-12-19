package com.mail.mail_backend.Builder;

import java.util.List;

public class attributeSearch {
    private String Sender;
    private String Receiver;
    private String email;
    private String Type;
    private String Subject;
    private String Date;
    private boolean Attachment;
    private int Priority;

    public attributeSearch(String sender, String receiver, String email, String type, String subject, String date, boolean attachment, int priority) {
        Sender = sender;
        Receiver = receiver;
        this.email = email;
        Type = type;
        Subject = subject;
        Date = date;
        Attachment = attachment;
        Priority = priority;
    }

    public String getSender() {
        return Sender;
    }

    public void setSender(String sender) {
        Sender = sender;
    }

    public String getReceiver() {
        return Receiver;
    }

    public void setReceiver(String receiver) {
        Receiver = receiver;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getType() {
        return Type;
    }

    public void setType(String type) {
        Type = type;
    }

    public String getSubject() {
        return Subject;
    }

    public void setSubject(String subject) {
        Subject = subject;
    }

    public String getDate() {
        return Date;
    }

    public void setDate(String date) {
        Date = date;
    }

    public boolean isAttachment() {
        return Attachment;
    }

    public void setAttachment(boolean attachment) {
        Attachment = attachment;
    }

    public int getPriority() {
        return Priority;
    }

    public void setPriority(int priority) {
        Priority = priority;
    }
}
