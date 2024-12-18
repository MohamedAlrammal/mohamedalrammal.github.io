package com.mail.mail_backend.Contact;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

public class LoadDeContact {
    private List<ContactsUsers> contactsUsers;

    public List<ContactsUsers> retrieveContact() {
        ArrayList<ContactsUsers> contactsUsers = new ArrayList<>();
        String fileName = "re.ser";

        try (FileInputStream fileIn = new FileInputStream(fileName);
             BufferedInputStream bufferIn = new BufferedInputStream(fileIn);
             ObjectInputStream objectIn = new ObjectInputStream(bufferIn)) {

            while (true) { // Read until EOFException is thrown
                try {
                    ContactsUsers contactsUsers1 = (ContactsUsers) objectIn.readObject();
                    contactsUsers.add(contactsUsers1);
                } catch (EOFException e) {
                    break; // End of file reached
                }
            }

        } catch (FileNotFoundException e) {
            System.err.println("File not found: " + e.getMessage());
        } catch (IOException | ClassNotFoundException e) {
            System.err.println("Error while reading email data: " + e.getMessage());
        }

        return contactsUsers;
    }

    public void setContactsUsers(List<ContactsUsers> contactsUsers) {
        this.contactsUsers = retrieveContact();
    }
    public List<ContactsUsers> getContactsUsers(){
        if (contactsUsers == null) {
            contactsUsers = retrieveContact(); // Populate from the file if null
        }
        return contactsUsers;
    }
}
