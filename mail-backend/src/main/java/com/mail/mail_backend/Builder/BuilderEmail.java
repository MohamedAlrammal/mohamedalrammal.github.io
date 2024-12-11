package com.mail.mail_backend.Builder;

import com.mail.mail_backend.SignIn.User;

public interface BuilderEmail {
    public void BuildSender();
    public void BuildDate();
    public void BuildAttachment();
    public EmailInfo getResult();
}
