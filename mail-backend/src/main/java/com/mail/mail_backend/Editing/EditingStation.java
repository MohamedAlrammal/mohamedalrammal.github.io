package com.mail.mail_backend.Editing;

import com.mail.mail_backend.Contact.ContactsUsers;

import java.util.ArrayList;
import java.util.List;

public class EditingStation implements EditingSubject{
    private List<EditObserver> editObserverList = new ArrayList<>();
    private ContactsUsers contactsUsers;
    @Override
    public void addObserver(EditObserver editObserver) {
              editObserverList.add(editObserver);
    }

    @Override
    public void notifyObservers() {
        for(EditObserver e:editObserverList) {
              e.update(contactsUsers);
        }
    }
    public void setContactsUsers(ContactsUsers contactsUsers) {
        this.contactsUsers = contactsUsers;
         notifyObservers();
    }
}
