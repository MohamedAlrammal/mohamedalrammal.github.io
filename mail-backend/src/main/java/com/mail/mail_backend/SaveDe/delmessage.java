package com.mail.mail_backend.SaveDe;

import com.mail.mail_backend.Builder.DeleteMail;

import java.util.List;

public class delmessage {
    public void delete(DeleteMail deleteMail) {

        LoadDelete loadDelete=new LoadDelete();
        List<DeleteMail>loadings=loadDelete.getDeleteMails();
        for(DeleteMail c:loadings) {

            if(c.getSender().equals(deleteMail.getSender())&&c.getReceiver().equals(deleteMail.getReceiver())&&
               c.getSubject().equals(deleteMail.getSubject()) && c.getEmail().equals(deleteMail.getEmail())){
                DeleteMess deleteMess =new DeleteMess();
               boolean x= deleteMess.deletemess(c.getSender(),c.getReceiver(),c.getEmail(),c.getType(),c.getSubject(), c.getDate(), c.getAttachment(),c.isDelete(),c.getPriority());
                System.out.println(x);

            }

        }

    }
}
