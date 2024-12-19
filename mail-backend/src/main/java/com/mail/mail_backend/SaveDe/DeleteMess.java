package com.mail.mail_backend.SaveDe;

import com.mail.mail_backend.Builder.Attachments;
import com.mail.mail_backend.Builder.DeleteMail;


import java.io.*;
import java.util.ArrayList;
import java.util.List;

public class DeleteMess {
    public boolean deletemess(DeleteMail deleteMail) {
        String fileName = "Deletes.ser";
        List<DeleteMail> deleteMails = new ArrayList<>();
        boolean mailRemoved = false;

        // First, read existing contacts
        try (FileInputStream fileIn = new FileInputStream(fileName);
             BufferedInputStream bufferIn = new BufferedInputStream(fileIn);
             ObjectInputStream objectIn = new ObjectInputStream(bufferIn)) {

            while (true) {
                try {
                    DeleteMail deleteMail1 = (DeleteMail) objectIn.readObject();
                    // Add to list if not the contact to be deleted
                    if (!deleteMail1.equals(deleteMail)) {
                        deleteMails.add(deleteMail1);
                    } else {
                        mailRemoved = true;
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
        if (mailRemoved) {
            try (FileOutputStream fileOut = new FileOutputStream(fileName);
                 BufferedOutputStream bufferOut = new BufferedOutputStream(fileOut);
                 ObjectOutputStream objectOut = new ObjectOutputStream(bufferOut)) {

                for (DeleteMail d : deleteMails) {
                    objectOut.writeObject(d);
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
    public boolean deletemess(String sender, String receiver, String email, String type, String subject, String date, List<Attachments> attachment, boolean isDelete, int priority) {
        DeleteMail deleteMail = new DeleteMail(sender, receiver,email,type,subject,date,attachment,isDelete,priority);
        return deletemess(deleteMail);
    }

}
