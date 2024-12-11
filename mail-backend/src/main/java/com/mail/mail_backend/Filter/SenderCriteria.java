package com.mail.mail_backend.Filter;

import com.mail.mail_backend.Builder.EmailInfo;
import com.mail.mail_backend.SignIn.User;

import java.util.ArrayList;
import java.util.List;

public class SenderCriteria implements EmailCriteria{
    private User user;
    @Override
    public List<EmailInfo> FilterTypes(List<EmailInfo> emails) {
        List<EmailInfo>SenderEm=new ArrayList<>();
        for(EmailInfo e: emails){
            if(e.getSender().equals(user.getMail()))
                SenderEm.add(e);
        }
        return SenderEm;
    }
}
