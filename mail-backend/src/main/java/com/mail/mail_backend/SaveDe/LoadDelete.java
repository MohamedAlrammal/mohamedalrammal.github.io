package com.mail.mail_backend.SaveDe;

import com.mail.mail_backend.Builder.DeleteMail;
import com.mail.mail_backend.Builder.EmailInfo;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

public class LoadDelete {
    private List<DeleteMail> deleteMails;

    public List<DeleteMail> retrieveDelete() {
        ArrayList<DeleteMail> deleteMails = new ArrayList<>();
        String fileName = "Deletes.ser";

        try (FileInputStream fileIn = new FileInputStream(fileName);
             BufferedInputStream bufferIn = new BufferedInputStream(fileIn);
             ObjectInputStream objectIn = new ObjectInputStream(bufferIn)) {

            while (true) { // Read until EOFException is thrown
                try {
                    DeleteMail deleteMail = (DeleteMail) objectIn.readObject();
                    deleteMails.add(deleteMail);
                } catch (EOFException e) {
                    break; // End of file reached
                }
            }

        } catch (FileNotFoundException e) {
            System.err.println("File not found: " + e.getMessage());
        } catch (IOException | ClassNotFoundException e) {
            System.err.println("Error while reading email data: " + e.getMessage());
        }

        return deleteMails;
    }

    public void setDeleteMails(List<DeleteMail> deleteMails) {
        this.deleteMails = retrieveDelete();
    }
    public List<DeleteMail> getDeleteMails(){
        if (deleteMails == null) {
            deleteMails = retrieveDelete(); // Populate from the file if null
        }
        return deleteMails;
    }
}