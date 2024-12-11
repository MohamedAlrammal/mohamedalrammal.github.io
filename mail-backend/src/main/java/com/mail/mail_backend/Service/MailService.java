package com.mail.mail_backend.Service;

import com.mail.mail_backend.Builder.*;
import com.mail.mail_backend.Filter.*;
import com.mail.mail_backend.Login.*;
import com.mail.mail_backend.SaveDe.LoadDelete;
import com.mail.mail_backend.SaveLoad.LoadMessage;
import com.mail.mail_backend.SaveLoad.SaveMessage;
import com.mail.mail_backend.SignIn.Mailuser;
import com.mail.mail_backend.SignIn.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MailService {

public String addRequest(Request request){
    SupportHandler checkName = new CheckNames();
    SupportHandler checkMail = new CheckEmails();
    SupportHandler checkPass = new CheckPassword();
    checkName.setNextHandler(checkMail);
    checkMail.setNextHandler(checkPass);
    System.out.println("Ok");
    return checkName.HandleRequest(request);
}
public String Signuser(User user){
    Mailuser mailuser = new Mailuser();
    return mailuser.HandleUsers(user);
}
public EmailInfo information(){
     BuilderEmail assembleMessage=new AssembleMessage();
     EmailDirector emailDirector = new EmailDirector(assembleMessage);
     SaveMessage saveMessage =new SaveMessage(assembleMessage.getResult());
     return assembleMessage.getResult();
}
public List<EmailInfo> Send (){
    LoadMessage loadMessage =new LoadMessage();
    EmailCriteria senderCriteria=new SenderCriteria();
    return senderCriteria.FilterTypes(loadMessage.getEmailsList());
}
public List<EmailInfo> Inbox(){
    LoadMessage loadMessage =new LoadMessage();
    EmailCriteria receivedCriteria=new RecievedCriteria();
    return receivedCriteria.FilterTypes(loadMessage.getEmailsList());
}
public List<EmailInfo> Drafts(){
    LoadMessage loadMessage =new LoadMessage();
    EmailCriteria draftCriteria=new DraftCriteria();
    return draftCriteria.FilterTypes(loadMessage.getEmailsList());
}
public void deleteMes(EmailInfo emailInfo){
    DeleteMail deleteMail =new DeleteMail(emailInfo.getSender(), emailInfo.getReceiver(), emailInfo.getEmail(), emailInfo.getType()
    , emailInfo.getSubject(), emailInfo.getDate(), emailInfo.getAttachment(), emailInfo.getPriority(), true);
}
public List<DeleteMail> Trash(){
    LoadDelete loadDelete = new LoadDelete();
    DeleteCriteria deleteCriteria=new DeleteCriteria();
    return deleteCriteria.FilterTypes(loadDelete.getDeleteMails());
}

}
