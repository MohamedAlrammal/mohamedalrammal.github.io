package com.mail.mail_backend.Builder;

import com.mail.mail_backend.Contact.ContactsUsers;

import java.io.Serializable;
import java.util.List;
import java.util.Objects;

public class DeleteMail implements Serializable{
    private static final long serialVersionUID = 3915522481892032731L;
    private String Sender;
    private String Receiver;
    private String email;
    private String Type;
    private String Subject;
    private String Date;
    private List<Attachments> Attachment;
    private boolean IsDelete;
    private int Priority;

    public DeleteMail(String sender, String receiver, String email, String type, String subject, String date, List<Attachments> attachment, boolean isDelete,int priority) {
        Sender = sender;
        Receiver = receiver;
        this.email = email;
        Type = type;
        Subject = subject;
        Date = date;
        Attachment = attachment;
        IsDelete = isDelete;
        Priority=priority;
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

    public List<Attachments> getAttachment() {
        return Attachment;
    }

    public void setAttachment(List<Attachments> attachment) {

        Attachment = attachment;
    }

    public boolean isDelete() {
        return IsDelete;
    }

    public void setDelete(boolean delete) {
        IsDelete = delete;
    }
    public int getPriority() {
        return Priority;
    }

    public void setPriority(int priority) {
        Priority = priority;
    }
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        DeleteMail that = (DeleteMail) o;
        return Objects.equals(Sender, that.Sender) &&
                Objects.equals(Receiver, that.Receiver) &&
                Objects.equals(Type, that.Type)&&
                Objects.equals(isDelete(),that.IsDelete)&&
                Objects.equals(Subject,that.Subject)&&
                Objects.equals(email,that.email);

    }

    // Override hashCode() for use in hash-based collections
    @Override
    public int hashCode() {
        return Objects.hash( Sender, Receiver, email,Type,Subject, Date, Attachment, IsDelete,Priority);
    }

}

