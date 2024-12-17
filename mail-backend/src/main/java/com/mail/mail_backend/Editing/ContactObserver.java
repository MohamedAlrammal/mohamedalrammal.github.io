package com.mail.mail_backend.Editing;

import com.mail.mail_backend.Contact.ContactsUsers;
import com.mail.mail_backend.Contact.DeleteContacts;
import com.mail.mail_backend.Contact.LoadContacts;
import com.mail.mail_backend.Contact.SaveContacts;

import java.util.List;

public class ContactObserver implements EditObserver{
    @Override
    public void update(ContactsUsers contactsUsers) {

        LoadContacts loadContacts=new LoadContacts();
        List<ContactsUsers>loadings=loadContacts.getContactsUsers();
        for(ContactsUsers c:loadings) {
            if(c.getAdmin().equals(contactsUsers.getAdmin())&& c.getAccounts().equals(contactsUsers.getAccounts())){
                    c.setAccounts(contactsUsers.getAccounts());
            }
            DeleteContacts deleteContacts =new DeleteContacts();
            deleteContacts.deleteContact(c.getAdmin(),c.getName());
            SaveContacts saveContacts=new SaveContacts(c);

        }

    }
}
