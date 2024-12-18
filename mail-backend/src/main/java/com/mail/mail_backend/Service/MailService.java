package com.mail.mail_backend.Service;

import com.mail.mail_backend.Builder.*;
import com.mail.mail_backend.Contact.*;
import com.mail.mail_backend.Editing.*;
import com.mail.mail_backend.Filter.*;
import com.mail.mail_backend.Login.*;

import com.mail.mail_backend.SaveDe.LoadDelete;
import com.mail.mail_backend.SaveDe.SaveDelete;
import com.mail.mail_backend.SaveLoad.LoadMessage;
import com.mail.mail_backend.SaveLoad.SaveMessage;
import com.mail.mail_backend.Search.*;
import com.mail.mail_backend.SignIn.Mailuser;
import com.mail.mail_backend.SignIn.User;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Comparator;
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

public EmailInfo information(EmailInfo emailInfo){

     SaveMessage saveMessage =new SaveMessage(emailInfo);
     return new EmailInfo(emailInfo.getSender()
     ,emailInfo.getReceiver(),emailInfo.getEmail(),emailInfo.getType(),emailInfo.getSubject(), emailInfo.getDate(),
             emailInfo.getAttachment(), emailInfo.getPriority());
}
public List<EmailInfo> Send (person person){
    LoadMessage loadMessage = new LoadMessage();
    List<EmailInfo> emailList = loadMessage.getEmailsList();

    if (emailList == null || emailList.isEmpty()) {
        System.out.println("No emails found.");
        return new ArrayList<>(); // Return an empty list instead of null
    }

    EmailCriteria senderCriteria = new SenderCriteria(person.getGuest());
    return senderCriteria.FilterTypes(emailList);
}
public List<EmailInfo> Inbox(person person){
    LoadMessage loadMessage = new LoadMessage();
    List<EmailInfo> emailList = loadMessage.getEmailsList();


    if (emailList == null || emailList.isEmpty()) {
        System.out.println("No emails found.");
        return new ArrayList<>(); // Return an empty list instead of null
    }

    EmailCriteria recievedCriteria = new RecievedCriteria(person.getGuest());
    return recievedCriteria.FilterTypes(emailList);
}
public List<EmailInfo> SortedInbox(person person){
    List<EmailInfo>InboxList=Inbox(person);
    InboxList.sort(
            Comparator.comparing(EmailInfo::getPriority).reversed()
    );
    return InboxList;
}
    public List<EmailInfo> SortedSend(person person){
        List<EmailInfo>SendList=Inbox(person);
        SendList.sort(
                Comparator.comparing(EmailInfo::getPriority).reversed()
        );
        return SendList;
    }
    public List<EmailInfo> SortedDraft(person person){
        List<EmailInfo>DraftList=Inbox(person);
        DraftList.sort(
                Comparator.comparing(EmailInfo::getPriority).reversed()
        );
        return DraftList;
    }

public List<EmailInfo> Drafts(person person){
    LoadMessage loadMessage = new LoadMessage();
    List<EmailInfo> emailList = loadMessage.getEmailsList();

    if (emailList == null || emailList.isEmpty()) {
        System.out.println("No emails found.");
        return new ArrayList<>(); // Return an empty list instead of null
    }

    EmailCriteria draftCriteria = new DraftCriteria(person.getGuest());
    return draftCriteria.FilterTypes(emailList);
}
public DeleteMail deleteMes(DeleteMail deleteMail){
    SaveDelete saveDelete = new SaveDelete(deleteMail);
    return new DeleteMail(deleteMail.getSender()
            ,deleteMail.getReceiver(),deleteMail.getEmail(),deleteMail.getType(),deleteMail.getSubject(), deleteMail.getDate(),
            deleteMail.getAttachment(),  deleteMail.isDelete(),deleteMail.getPriority());
}
public List<DeleteMail> Trash(person person){
    LoadDelete loadDelete=new LoadDelete();
    List<DeleteMail> deleteMails=loadDelete.getDeleteMails();
    List<DeleteMail> trashMails=new ArrayList<>();
    for(DeleteMail d:deleteMails) {
        if ((d.isDelete()&&person.getGuest().equals(d.getSender())&& d.getType().equals("sent"))||
                (d.isDelete()&&person.getGuest().equals(d.getReceiver()))||
                (d.isDelete()&&person.getGuest().equals(d.getSender())&& d.getType().equals("Draft")))
            trashMails.add(d);
    }
   return trashMails;
}
public List<EmailInfo>deleteIn(DeleteMail deleteMail){
    SaveDelete saveDelete =new SaveDelete(deleteMail);
    person person =new person(deleteMail.getReceiver());
    return Inbox(person);
}
    public List<EmailInfo>deleteSe(DeleteMail deleteMail){
        SaveDelete saveDelete =new SaveDelete(deleteMail);
        person person =new person(deleteMail.getSender());
        return Send(person);
}
    public List<EmailInfo>deleteDR(DeleteMail deleteMail){
        SaveDelete saveDelete =new SaveDelete(deleteMail);
        person person =new person(deleteMail.getSender());
        return Drafts(person);
}
public ContactsUsers addContact(ContactsUsers contactsUsers){
    SaveContacts saveContacts =new SaveContacts(contactsUsers);
    return contactsUsers;
}
public List<ContactsUsers>contactList(person person){
    LoadContacts loadContacts = new LoadContacts();
    List<ContactsUsers>contactsUsersList=loadContacts.getContactsUsers();
    List<ContactsUsers>GetContacts=new ArrayList<>();
    for(ContactsUsers c:contactsUsersList){
        if(person.getGuest().equals(c.getAdmin()))
            GetContacts.add(c);
    }
    return GetContacts;
}
public List<EmailInfo> Search(EmailInfo emailInfo){
    LoadMessage loadMessage =new LoadMessage();
    List<EmailInfo>loads=loadMessage.getEmailsList();
    SearchHandler checkFrom = new SearchFrom();
    SearchHandler checkTo = new SearchTo();
    SearchHandler checkSub= new SearchSub();
    SearchHandler checkPrio=new SearchPriority();
    SearchHandler checkHas= new HasAttachments();
    SearchHandler checkDate= new SearchDate();
    checkFrom.setNextHandler(checkTo);
    checkTo.setNextHandler(checkSub);
    checkSub.setNextHandler(checkPrio);
    checkPrio.setNextHandler(checkHas);
    checkHas.setNextHandler(checkDate);
    System.out.println("ok");
    return checkFrom.HandleRequest(loads,emailInfo);
}
public List <ContactsUsers> reContacts(ContactsUsers contactsUsers) {
    if (contactsUsers == null || contactsUsers.getAdmin() == null || contactsUsers.getAccounts() == null) {
        throw new IllegalArgumentException("ContactsUsers object is invalid or incomplete.");
    }
    EditingStation editingSubject =new EditingStation();
    EditObserver editObserver =new ContactObserver();
    editingSubject.addObserver(editObserver);
    editingSubject.setContactsUsers(contactsUsers);
    LoadContacts loadContacts =new LoadContacts();
    List<ContactsUsers>loads= loadContacts.getContactsUsers();
    List<ContactsUsers> contactsUsersList= new ArrayList<>();
    for(ContactsUsers c:loads){
        if(c.getAdmin().equals(contactsUsers.getAdmin()))
            contactsUsersList.add(c);
    }
   return contactsUsersList;
}
    public List <ContactsUsers> DeContacts(ContactsUsers contactsUsers) {
        if (contactsUsers == null || contactsUsers.getAdmin() == null || contactsUsers.getAccounts() == null) {
            throw new IllegalArgumentException("ContactsUsers object is invalid or incomplete.");
        }
        EditingStation editingSubject =new EditingStation();
        EditObserver deObserver =new DeleteObserver();
        editingSubject.addObserver(deObserver);
        editingSubject.setContactsUsers(contactsUsers);
        LoadContacts loadContacts =new LoadContacts();
        List<ContactsUsers>loads= loadContacts.getContactsUsers();
        List<ContactsUsers> contactsUsersList= new ArrayList<>();
        for(ContactsUsers c:loads){
            if(c.getAdmin().equals(contactsUsers.getAdmin()))
                contactsUsersList.add(c);
        }
        return contactsUsersList;
    }

}
