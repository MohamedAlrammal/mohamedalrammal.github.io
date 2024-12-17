package com.mail.mail_backend.Editing;

import com.mail.mail_backend.Builder.EmailInfo;
import com.mail.mail_backend.Contact.ContactsUsers;

public interface EditObserver {
    void update(ContactsUsers contactsUsers);
}
