package com.mail.mail_backend.Contact;

import java.io.Serializable;
import java.util.List;

public class ContactsUsers implements Serializable {
    private static final long serialVersionUID = 3915522481892032731L;
    private String Admin;
    private String name;
    private List<String>Accounts;

    public ContactsUsers(String admin, String name, List<String> accounts) {
        Admin = admin;
        this.name = name;
        Accounts = accounts;
    }

    public String getAdmin() {
        return Admin;
    }

    public void setAdmin(String admin) {
        Admin = admin;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<String> getAccounts() {
        return Accounts;
    }

    public void setAccounts(List<String> accounts) {
        Accounts = accounts;
    }
}
