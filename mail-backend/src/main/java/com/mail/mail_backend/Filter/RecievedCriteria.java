package com.mail.mail_backend.Filter;

import com.mail.mail_backend.Builder.EmailInfo;
import com.mail.mail_backend.SignIn.User;

import java.util.ArrayList;
import java.util.List;

public class RecievedCriteria implements EmailCriteria{
    private String person;
    public RecievedCriteria(String person){
        this.person=person;
    }

    @Override
    public List<EmailInfo> FilterTypes(List<EmailInfo> emails) {
        DeleteInterface deleteInterface =new DeleteInbox();

        if (emails == null) {
            return new ArrayList<>(); // Return an empty list if null
        }

        List<EmailInfo> ReEmails = new ArrayList<>();
        for (EmailInfo e : emails) {
            if (e != null && e.getReceiver() != null&&e.getReceiver().equals(person)&& deleteInterface.FilterTypes(e)) {
                ReEmails.add(e);
            }
        }
        return ReEmails;
    }
}


