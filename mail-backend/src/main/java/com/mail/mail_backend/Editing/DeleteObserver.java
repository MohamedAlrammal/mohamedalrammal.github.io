package com.mail.mail_backend.Editing;

import com.mail.mail_backend.Contact.ContactsUsers;
import com.mail.mail_backend.Contact.DeleteContacts;
import com.mail.mail_backend.Contact.LoadContacts;
import com.mail.mail_backend.Contact.SaveContacts;

import java.util.List;

public class DeleteObserver implements EditObserver{
    @Override
    public void update(ContactsUsers contactsUsers) {

        LoadContacts loadContacts=new LoadContacts();
        List<ContactsUsers> loadings=loadContacts.getContactsUsers();
        for(ContactsUsers c:loadings) {
            if (c.getAdmin() == null || c.getAccounts() == null) {
                continue; // Skip invalid entries
            }
            if(c.getAdmin().equals(contactsUsers.getAdmin())&& c.getName().equals(contactsUsers.getName())){
                DeleteContacts contactsUsersManager= new DeleteContacts();
                boolean x= contactsUsersManager.deleteContact(c);
                System.out.println(x);
            }
        }
    }
}
