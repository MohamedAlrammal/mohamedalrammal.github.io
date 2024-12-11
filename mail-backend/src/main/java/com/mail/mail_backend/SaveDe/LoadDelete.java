package com.mail.mail_backend.SaveDe;

import com.mail.mail_backend.Builder.DeleteMail;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

public class LoadDelete {
    private List<DeleteMail> deleteMails;

    public List<DeleteMail> getDeleteMails() {
        return deleteMails;
    }

    public void setDeleteMails(List<DeleteMail> deleteMails) {
        this.deleteMails = RetriveDelete();
    }

    public List<DeleteMail> RetriveDelete(){
        ArrayList<DeleteMail> deleteList=new ArrayList<>();
        String fileName = "Delete_data.ser";
        try (FileInputStream fileIn = new FileInputStream(fileName);
             ObjectInputStream objectIn = new ObjectInputStream(fileIn)) {

            while (true) { // Read until EOFException is thrown
                try {
                    DeleteMail deleteMail = (DeleteMail) objectIn.readObject();
                    deleteList.add(deleteMail);
                } catch (EOFException e) {
                    break; // End of file reached
                }
            }

        } catch (FileNotFoundException e) {
            System.err.println("File not found: " + e.getMessage());
        } catch (IOException | ClassNotFoundException e) {
            System.err.println("Error while reading user data: " + e.getMessage());
        }
        return deleteList;
    }

}
