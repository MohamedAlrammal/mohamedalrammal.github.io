package com.mail.mail_backend.Contact;

import java.io.Serializable;
import java.util.List;
import java.util.Objects;

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
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ContactsUsers that = (ContactsUsers) o;
        return Objects.equals(Admin, that.Admin) &&
                Objects.equals(name, that.name) &&
                Objects.equals(Accounts, that.Accounts);
    }

    // Override hashCode() for use in hash-based collections
    @Override
    public int hashCode() {
        return Objects.hash(Admin, name, Accounts);
    }

}
