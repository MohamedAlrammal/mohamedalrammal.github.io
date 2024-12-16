package com.mail.mail_backend.SaveLoad;

import com.mail.mail_backend.Builder.EmailInfo;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

public class LoadMessage {
    private List<EmailInfo> emailsList;

    public List<EmailInfo> RetriveEmail() {
        List<EmailInfo> emailsList = new ArrayList<>();
        String fileName = "Messages.ser";

        try (FileInputStream fileIn = new FileInputStream(fileName);
             BufferedInputStream bufferIn = new BufferedInputStream(fileIn);
             ObjectInputStream objectIn = new ObjectInputStream(bufferIn)) {

            while (true) { // Read until EOFException is thrown
                try {
                    EmailInfo emailInfo = (EmailInfo) objectIn.readObject();
                    emailsList.add(emailInfo);
                } catch (EOFException e) {
                    break; // End of file reached
                }
            }

        } catch (FileNotFoundException e) {
            System.err.println("File not found: " + e.getMessage());
        } catch (IOException | ClassNotFoundException e) {
            System.err.println("Error while reading email data: " + e.getMessage());
        }

        return emailsList;
    }

    public void setEmailsList(List<EmailInfo> emailsList) {
        this.emailsList = RetriveEmail();
    }

    public List<EmailInfo> getEmailsList() {
        if (emailsList == null) {
            emailsList = RetriveEmail(); // Populate from the file if null
        }
        return emailsList;
    }
}
