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
<<<<<<< Updated upstream
            if(d.isDelete()&& d.getType().equals("recevier")&& d.getSubject().equals(emailInfo.getSubject())&&d.getEmail().equals(emailInfo.getEmail())
              &&d.getDate().equals(emailInfo.getDate()))
=======
            if(d.isDelete()&& d.getSubject().equals(emailInfo.getSubject())&&d.getEmail().equals(emailInfo.getEmail()))
>>>>>>> Stashed changes
                 return false;
        }
        return true;
    }
}
