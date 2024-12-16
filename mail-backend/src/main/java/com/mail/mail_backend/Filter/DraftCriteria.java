package com.mail.mail_backend.Filter;

import com.mail.mail_backend.Builder.EmailInfo;
import com.mail.mail_backend.SignIn.User;

import java.util.ArrayList;
import java.util.List;

public class DraftCriteria implements EmailCriteria{
    private String person;

    public DraftCriteria(String person) {
        this.person = person;
    }

    @Override
    public List<EmailInfo> FilterTypes(List<EmailInfo> emails) {
        DeleteInterface deleteInterface =new DeleteDraft();
        List<EmailInfo>DraftEm=new ArrayList<>();
        for(EmailInfo e: emails){
            if(e.getSender().equals(person) && e.getType().equals("Draft")&& deleteInterface.FilterTypes(e))
                DraftEm.add(e);
        }
        return DraftEm;
    }
}
