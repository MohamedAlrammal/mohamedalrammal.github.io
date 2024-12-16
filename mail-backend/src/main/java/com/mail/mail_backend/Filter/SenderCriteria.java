package com.mail.mail_backend.Filter;

import java.util.ArrayList;
import java.util.List;

import com.mail.mail_backend.Builder.EmailInfo;

public class SenderCriteria implements EmailCriteria{
    private String person;
    public SenderCriteria(String person){
        this.person=person;
    }

    @Override
    public List<EmailInfo> FilterTypes(List<EmailInfo> emails) {
        DeleteInterface deleteInterface =new DeleteSend();
        if (emails == null) {
            return new ArrayList<>(); // Return an empty list if null
        }

        List<EmailInfo> senderEmails = new ArrayList<>();
        for (EmailInfo e : emails) {
            if (e != null && e.getSender() != null&&e.getSender().equals(person)&& deleteInterface.FilterTypes(e)&& e.getType().equals("sent")) {
                senderEmails.add(e);
            }
        }
        return senderEmails;
    }
}