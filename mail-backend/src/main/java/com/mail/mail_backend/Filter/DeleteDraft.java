package com.mail.mail_backend.Filter;

import com.mail.mail_backend.Builder.DeleteMail;
import com.mail.mail_backend.Builder.EmailInfo;
import com.mail.mail_backend.SaveDe.LoadDelete;

import java.util.ArrayList;
import java.util.List;
public class DeleteDraft implements DeleteInterface {
    private EmailInfo emailInfo;
    @Override
    public boolean FilterTypes(EmailInfo emailInfo) {
        LoadDelete loadDelete = new LoadDelete();
        List<DeleteMail>deleteMails=loadDelete.getDeleteMails();
        for(DeleteMail d:deleteMails) {
            if(d.isDelete()&& d.getType().equals("Draft")&& d.getSubject().equals(emailInfo.getSubject())&&d.getEmail().equals(emailInfo.getEmail())
<<<<<<< Updated upstream
                    &&d.getDate().equals(emailInfo.getDate()))
=======
                    )
>>>>>>> Stashed changes
                return false;
        }
        return true;
    }
}


