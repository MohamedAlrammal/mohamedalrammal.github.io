package com.mail.mail_backend.Contact;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

public class DeleteContacts {
    public boolean deleteContact(ContactsUsers contactToDelete) {
        String fileName = "Contacts.ser";
        List<ContactsUsers> contactsList = new ArrayList<>();
        boolean contactRemoved = false;

        // First, read existing contacts
        try (FileInputStream fileIn = new FileInputStream(fileName);
             BufferedInputStream bufferIn = new BufferedInputStream(fileIn);
             ObjectInputStream objectIn = new ObjectInputStream(bufferIn)) {

            while (true) {
                try {
                    ContactsUsers contact = (ContactsUsers) objectIn.readObject();
                    // Add to list if not the contact to be deleted
                    if (!contact.equals(contactToDelete)) {
                        contactsList.add(contact);
                    } else {
                        contactRemoved = true;
                    }
                } catch (EOFException e) {
                    break;
                }
            }
        } catch (FileNotFoundException e) {
            System.err.println("File not found: " + e.getMessage());
            return false;
        } catch (IOException | ClassNotFoundException e) {
            System.err.println("Error while reading contacts: " + e.getMessage());
            return false;
        }

        // If contact was found, rewrite the file without the deleted contact
        if (contactRemoved) {
            try (FileOutputStream fileOut = new FileOutputStream(fileName);
                 BufferedOutputStream bufferOut = new BufferedOutputStream(fileOut);
                 ObjectOutputStream objectOut = new ObjectOutputStream(bufferOut)) {

                for (ContactsUsers contact : contactsList) {
                    objectOut.writeObject(contact);
                }
                System.out.println("Contact deleted successfully!");
                return true;

            } catch (IOException e) {
                System.err.println("Error while saving updated contacts: " + e.getMessage());
                return false;
            }
        }

        System.out.println("Contact not found.");
        return false;
    }

    // Overloaded method to delete contact by specific attributes
    public boolean deleteContact(String admin, String name, List<String> accounts) {
        ContactsUsers contactToDelete = new ContactsUsers(admin, name, accounts);
        return deleteContact(contactToDelete);
    }
}