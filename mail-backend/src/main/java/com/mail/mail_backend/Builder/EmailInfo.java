package com.mail.mail_backend.Builder;

import com.mail.mail_backend.SignIn.User;

import java.io.Serializable;
import java.util.List;

public class EmailInfo implements Serializable {
    private static final long serialVersionUID = 3915522481892032731L;
    private String Sender;
    private String Receiver;
    private String email;
    private String Type;
    private String Subject;
    private String Date;
    private List<String> Attachment;
    private int Priority;

    public EmailInfo(String sender, String receiver, String email, String type, String subject, String date, List<String> attachment, int priority) {
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

    public List<String> getAttachment() {
        return Attachment;
    }

    public void setAttachment(List<String> attachment) {
        Attachment = attachment;
    }

    public int getPriority() {
        return Priority;
    }

    public void setPriority(int priority) {
        Priority = priority;
    }
}
