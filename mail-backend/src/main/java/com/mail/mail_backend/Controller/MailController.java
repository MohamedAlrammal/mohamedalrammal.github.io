package com.mail.mail_backend.Controller;

import com.mail.mail_backend.Builder.EmailInfo;
import com.mail.mail_backend.Service.MailService;
import com.mail.mail_backend.Login.Request;
import com.mail.mail_backend.SignIn.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


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
    public void Message(@RequestBody EmailInfo emailInfo) {
        mailService.information();
    }
    @PostMapping("/inbox")
    public List<EmailInfo> inbox(){
        return mailService.Inbox();
    }
    @PostMapping("/send")
    public List<EmailInfo> send(){
        return mailService.Send();
    }
    @PostMapping("/draft")
    public List <EmailInfo> draft(){
        return mailService.Drafts();
    }


}
