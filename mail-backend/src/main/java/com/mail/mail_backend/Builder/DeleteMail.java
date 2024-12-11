package com.mail.mail_backend.Builder;

import com.mail.mail_backend.SaveDe.SaveDelete;

import java.util.List;

public class DeleteMail extends EmailInfo{
    private boolean IsDelete;

    public boolean isDelete() {
        return IsDelete;
    }

    public DeleteMail(String Sender,String  Receiver,String email,String Type, String Subject, String Date, String Attachment,int Priority,boolean isDelete) {
        super();
        IsDelete = isDelete;
    }
    public void setDelete(boolean delete) {
        IsDelete = delete;
    }

    public DeleteMail remove(EmailInfo emailInfo){
             DeleteMail deleteMail=new DeleteMail(
                    emailInfo.Sender,
                    emailInfo.Receiver,
                    emailInfo.email,
                    emailInfo.Type,
                    emailInfo.Subject,
                    emailInfo.Date,
                    emailInfo.Attachment,
                    emailInfo.Priority,
                    true);
        SaveDelete saveDelete = new SaveDelete(deleteMail);
        return deleteMail;
    }

}

