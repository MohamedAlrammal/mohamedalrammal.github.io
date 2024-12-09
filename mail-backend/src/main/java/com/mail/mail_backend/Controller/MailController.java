package com.mail.mail_backend.Controller;

import com.mail.mail_backend.Service.MailService;
import com.mail.mail_backend.Login.Request;
import com.mail.mail_backend.SignIn.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
    @PostMapping
    public String Signin(@RequestBody User user) {
        return mailService.Signuser(user);
    }

}
