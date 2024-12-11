package com.mail.mail_backend.SaveLoad;

import com.mail.mail_backend.Builder.EmailInfo;

import java.io.*;


public class SaveMessage {
    private EmailInfo emailInfo;
    public SaveMessage(EmailInfo emailInfo){
        this.emailInfo=emailInfo;
        saveToFile();
    }

    private void saveToFile() {
        String fileName = "Message_data.ser"; // File name to save the object
        boolean append = new File(fileName).exists(); // Check if the file already exists

        try (FileOutputStream fileOut = new FileOutputStream(fileName, true);
             ObjectOutputStream objectOut = append
                     ? new SaveMessage.AppendingObjectOutputStream(fileOut)
                     : new ObjectOutputStream(fileOut)) {

            objectOut.writeObject(emailInfo);
            System.out.println("User data has been saved successfully!");

        } catch (IOException e) {
            System.err.println("Error while saving user data: " + e.getMessage());
        }
    }

    // Custom ObjectOutputStream to handle appending without writing a new header
    private static class AppendingObjectOutputStream extends ObjectOutputStream {
        public AppendingObjectOutputStream(OutputStream out) throws IOException {
            super(out);
        }

        @Override
        protected void writeStreamHeader() throws IOException {
            // Skip header when appending
            reset();
        }
    }

}
