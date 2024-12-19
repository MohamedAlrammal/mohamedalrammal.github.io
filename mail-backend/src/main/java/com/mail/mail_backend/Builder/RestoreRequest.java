package com.mail.mail_backend.Builder;

public class RestoreRequest {
    private DeleteMail deleteMail;
    private person person;

    // Getters and Setters
    public DeleteMail getDeleteMail() {
        return deleteMail;
    }

    public void setDeleteMail(DeleteMail deleteMail) {
        this.deleteMail = deleteMail;
    }

    public person getPerson() {
        return person;
    }

    public void setPerson(person person) {
        this.person = person;
    }
}
