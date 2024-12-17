package com.mail.mail_backend.Editing;

import com.mail.mail_backend.Contact.ContactsUsers;

public interface EditingSubject {
    void  addObserver (EditObserver editObserver);
    void notifyObservers();
}
