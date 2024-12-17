package com.mail.mail_backend.Contact;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

public class DeleteContacts {
    /**
     * Deletes a specific contact from the Contacts.ser file
     *
     * @param adminToDelete The admin name of the contact to be deleted
     * @param nameToDelete The name of the contact to be deleted
     * @return boolean indicating whether the deletion was successful
     */
    public boolean deleteContact(String adminToDelete, String nameToDelete) {
        String fileName = "Contacts.ser";
        String tempFileName = "Contacts_temp.ser";
        boolean contactDeleted = false;

        try {
            // Load existing contacts
            List<ContactsUsers> contactsList = loadContacts();

            // Create a list to store contacts to be written (excluding the one to delete)
            List<ContactsUsers> updatedContacts = new ArrayList<>();

            // Filter out the contact to be deleted
            for (ContactsUsers contact : contactsList) {
                if (!(contact.getAdmin().equals(adminToDelete) &&
                        contact.getName().equals(nameToDelete))) {
                    updatedContacts.add(contact);
                } else {
                    contactDeleted = true; // Mark that a contact was found and deleted
                }
            }

            // If no contact was found to delete, return false
            if (!contactDeleted) {
                return false;
            }

            // Write updated contacts to a new file
            try (FileOutputStream fileOut = new FileOutputStream(tempFileName);
                 BufferedOutputStream bufferOut = new BufferedOutputStream(fileOut);
                 ObjectOutputStream objectOut = new ObjectOutputStream(bufferOut)) {

                for (ContactsUsers contact : updatedContacts) {
                    objectOut.writeObject(contact);
                }
            }

            // Replace the original file with the temp file
            File originalFile = new File(fileName);
            File tempFile = new File(tempFileName);

            // Delete the original file
            if (originalFile.delete()) {
                // Rename the temp file to the original filename
                if (tempFile.renameTo(originalFile)) {
                    return true;
                } else {
                    System.err.println("Failed to rename temp file");
                    return false;
                }
            } else {
                System.err.println("Failed to delete original file");
                return false;
            }

        } catch (IOException e) {
            System.err.println("Error during contact deletion: " + e.getMessage());
            return false;
        }
    }

    /**
     * Loads contacts from the serialized file
     *
     * @return List of ContactsUsers loaded from the file
     */
    private List<ContactsUsers> loadContacts() {
        LoadContacts loadContacts = new LoadContacts();
        return loadContacts.retrieveContact();
    }
}