package com.mail.mail_backend.Controller;

import com.mail.mail_backend.Builder.DeleteMail;
import com.mail.mail_backend.Builder.EmailInfo;
import com.mail.mail_backend.Builder.person;
import com.mail.mail_backend.Contact.ContactsUsers;
import com.mail.mail_backend.Service.MailService;
import com.mail.mail_backend.Login.Request;
import com.mail.mail_backend.SignIn.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;



@RestController
@RequestMapping("/api/Mail")
public class MailController {
    @Autowired
    private MailService mailService;
    @PostMapping("/request")
    public String addperson(@RequestBody Request request) {
        System.out.println("Ok");
        return mailService.addRequest(request);
    }
    @PostMapping("/sign")
    public String Signin(@RequestBody User user) {
        return mailService.Signuser(user);
    }
    @PostMapping("/message")
    public EmailInfo Message(@RequestBody EmailInfo emailInfo) {

        return mailService.information(emailInfo);
    }
    @PostMapping  ("/inbox")
    public List<EmailInfo> inbox(@RequestBody person person){

        return mailService.Inbox(person);
    }
    @PostMapping("/send")
    public List<EmailInfo> send(@RequestBody person person){

        return mailService.Send(person);
    }
    @PostMapping("/draft")
    public List <EmailInfo> draft(@RequestBody person person){

        return mailService.Drafts(person);
    }
     @PostMapping("/delete")
    public DeleteMail deleteMes(@RequestBody DeleteMail deleteMail){
        return mailService.deleteMes(deleteMail);
     }
     @PostMapping("/trash")
    public List<DeleteMail> trash(@RequestBody person person){
        return mailService.Trash(person);
     }
     @PostMapping("/sortIn")
    public List<EmailInfo> Sortedin(@RequestBody person person){
        return mailService.SortedInbox(person);
     }
    @PostMapping("/sortSe")
    public List<EmailInfo> Sortedse(@RequestBody person person){
        return mailService.SortedSend(person);
    }
    @PostMapping("/sortDr")
    public List<EmailInfo> Sorteddr(@RequestBody person person){
        return mailService.SortedDraft(person);
    }
    @PostMapping("/deleteIn")
    public List<EmailInfo>deletein(@RequestBody DeleteMail deleteMail){
        return mailService.deleteIn(deleteMail);
    }
    @PostMapping("/deleteSe")
    public List<EmailInfo>deletese(@RequestBody DeleteMail deleteMail){
        return mailService.deleteSe(deleteMail);
    }
    @PostMapping("/deleteDr")
    public List<EmailInfo>deletedr(@RequestBody DeleteMail deleteMail){
        return mailService.deleteDR(deleteMail);
    }
    @PostMapping("/addContact")
    public ContactsUsers addContact(@RequestBody ContactsUsers contactsUsers){
        return mailService.addContact(contactsUsers);
    }
    @PostMapping("/getContacts")
    public List<ContactsUsers> getContact(@RequestBody person person){
        return mailService.contactList(person);
    }



//    @PostMapping("/deleteIn")
//    public List<EmailInfo>deleteIn(EmailInfo emailInfo){
//        mailService.deleteMes(emailInfo);
//        return mailService.Inbox();
//    }
//    @PostMapping("/deleteSe")
//    public List<EmailInfo>deleteSe(EmailInfo emailInfo){
//        mailService.deleteMes(emailInfo);
//        return mailService.Send();
//    }
//    @PostMapping("/deleteDr")
//    public List<EmailInfo>deleteDr(EmailInfo emailInfo){
//        mailService.deleteMes(emailInfo);
//        return mailService.Drafts();
//    }

}
