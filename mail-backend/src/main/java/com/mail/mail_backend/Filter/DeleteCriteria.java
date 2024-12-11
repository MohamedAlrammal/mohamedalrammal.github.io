package com.mail.mail_backend.Filter;

import com.mail.mail_backend.Builder.DeleteMail;
import com.mail.mail_backend.SignIn.User;

import java.util.ArrayList;
import java.util.List;

public class DeleteCriteria {
    private User user;
    public List<DeleteMail> FilterTypes(List<DeleteMail> emails) {
        List<DeleteMail>DeleteEm=new ArrayList<>();
        for(DeleteMail e: emails){
            if(e.isDelete() && e.getSender().equals(user.getMail()))
                DeleteEm.add(e);
        }
        return DeleteEm;
    }
}
