package com.mail.mail_backend.Filter;

import com.mail.mail_backend.Builder.DeleteMail;
import com.mail.mail_backend.Builder.EmailInfo;
import com.mail.mail_backend.SaveDe.LoadDelete;

import java.util.ArrayList;
import java.util.List;

public class DeleteInbox implements DeleteInterface {
    private EmailInfo emailInfo;
@Override
    public boolean FilterTypes(EmailInfo emailInfo) {
    LoadDelete loadDelete = new LoadDelete();
    List<DeleteMail>deleteMails=loadDelete.getDeleteMails();
        for(DeleteMail d:deleteMails) {
            if(d.isDelete()&& d.getSubject().equals(emailInfo.getSubject())&&d.getEmail().equals(emailInfo.getEmail()))
                 return false;
        }
        return true;
    }
}
