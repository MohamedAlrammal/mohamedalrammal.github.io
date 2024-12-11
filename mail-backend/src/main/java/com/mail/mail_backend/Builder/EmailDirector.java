package com.mail.mail_backend.Builder;

public class EmailDirector {
    public EmailDirector(BuilderEmail builderEmail){
        builderEmail.BuildSender();
        builderEmail.BuildDate();
        builderEmail.BuildAttachment();
    }
}
