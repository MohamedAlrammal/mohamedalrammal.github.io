package com.mail.mail_backend.SaveLoad;

import com.mail.mail_backend.Builder.EmailInfo;


import java.io.*;



public class SaveMessage {
    private EmailInfo emailInfo;

    public SaveMessage(EmailInfo emailInfo) {
        this.emailInfo = emailInfo;
        saveToFile();
    }

    private void saveToFile() {
        String fileName = "Messages.ser"; // File name to save the object

        try (FileOutputStream fileOut = new FileOutputStream(fileName, true);
             BufferedOutputStream bufferOut = new BufferedOutputStream(fileOut);
             ObjectOutputStream objectOut = fileOut.getChannel().size() > 0
                     ? new SaveMessage.AppendingObjectOutputStream(bufferOut)
                     : new ObjectOutputStream(bufferOut)) {

            objectOut.writeObject(emailInfo);
            System.out.println("Email data has been saved successfully!");

        } catch (IOException e) {
            System.err.println("Error while saving email data: " + e.getMessage());
        }
    }

    private static class AppendingObjectOutputStream extends ObjectOutputStream {
        public AppendingObjectOutputStream(OutputStream out) throws IOException {
            super(out);
        }

        @Override
        protected void writeStreamHeader() throws IOException {
            // Skip header for appending mode
        }
    }
}
