package com.mail.mail_backend.Builder;

import com.mail.mail_backend.SignIn.User;

import java.io.Serializable;

public class EmailInfo implements Serializable {
    private static final long serialVersionUID = 3915522481892032731L;
    private String Sender;
    private String Receiver;
    private String email;
    private String Type;
    private String Subject;
    private String Date;
    private String Attachment;

    public EmailInfo(String sender, String receiver, String email, String type, String subject, String date, String attachment, int priority) {
        Sender = sender;
        Receiver = receiver;
        this.email = email;
        Type = type;
        Subject = subject;
        Date = date;
        Attachment = attachment;
        Priority = priority;
    }

    public String getAttachment() {
        return Attachment;
    }

    public void setAttachment(String attachment) {
        Attachment = attachment;
    }

    public String getDate() {
        return Date;
    }

    public void setDate(String date) {
        Date = date;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getPriority() {
        return Priority;
    }

    public void setPriority(int priority) {
        Priority = priority;
    }

    public String getReceiver() {
        return Receiver;
    }

    public void setReceiver(String receiver) {
        Receiver = receiver;
    }

    public String getSender() {
        return Sender;
    }

    public void setSender(String Sender) {
        this.Sender = Sender;
    }

    public String getSubject() {
        return Subject;
    }

    public void setSubject(String subject) {
        Subject = subject;
    }

    public String getType() {
        return Type;
    }

    public void setType(String type) {
        Type = type;
    }

    private int Priority;
}
