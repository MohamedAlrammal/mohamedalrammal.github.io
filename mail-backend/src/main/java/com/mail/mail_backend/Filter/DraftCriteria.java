package com.mail.mail_backend.Filter;

import com.mail.mail_backend.Builder.EmailInfo;
import com.mail.mail_backend.SignIn.User;

import java.util.ArrayList;
import java.util.List;

public class DraftCriteria implements EmailCriteria{
    private User user;
    @Override
    public List<EmailInfo> FilterTypes(List<EmailInfo> emails) {
        List<EmailInfo>DraftEm=new ArrayList<>();
        for(EmailInfo e: emails){
            if(e.getSender().equals(user.getMail()) && e.getType().equals("Draft"))
                DraftEm.add(e);
        }
        return DraftEm;
    }
}
