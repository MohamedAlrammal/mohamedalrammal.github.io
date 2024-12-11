package com.mail.mail_backend.Filter;

import com.mail.mail_backend.Builder.EmailInfo;
import com.mail.mail_backend.SignIn.User;

import java.util.ArrayList;
import java.util.List;

public class RecievedCriteria implements EmailCriteria{
    private User user;
    @Override
    public List<EmailInfo> FilterTypes(List<EmailInfo> emails) {
        List<EmailInfo>ReceviedEm=new ArrayList<>();
        for(EmailInfo e: emails){
            if(e.getReceiver().equals(user.getMail()))
                ReceviedEm.add(e);
        }
        return ReceviedEm;
    }
}
