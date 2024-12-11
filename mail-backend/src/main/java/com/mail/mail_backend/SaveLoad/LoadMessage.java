package com.mail.mail_backend.SaveLoad;

import com.mail.mail_backend.Builder.EmailInfo;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

public class LoadMessage {
    private List<EmailInfo>emailsList;

    public List<EmailInfo> RetriveEmail(){
        ArrayList<EmailInfo>emailsList=new ArrayList<>();
        String fileName = "Message_data.ser";
        try (FileInputStream fileIn = new FileInputStream(fileName);
             ObjectInputStream objectIn = new ObjectInputStream(fileIn)) {

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
            System.err.println("Error while reading user data: " + e.getMessage());
        }
        return emailsList;
    }

    public void setEmailsList(List<EmailInfo> emailsList) {
        this.emailsList = RetriveEmail();
    }
    public List<EmailInfo> getEmailsList() {
        return emailsList;
    }
}
