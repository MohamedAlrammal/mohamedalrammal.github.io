package com.mail.mail_backend.SaveDe;

import com.mail.mail_backend.Builder.DeleteMail;


import java.io.*;

public class SaveDelete {
    private DeleteMail deleteMail;

    public SaveDelete(DeleteMail deleteMail) {
        this.deleteMail = deleteMail;
        saveToFile();
    }

    private void saveToFile() {
        String fileName = "Deletes.ser";

        try (FileOutputStream fileOut = new FileOutputStream(fileName, true);
             BufferedOutputStream bufferOut = new BufferedOutputStream(fileOut);
             ObjectOutputStream objectOut = fileOut.getChannel().size() > 0
                     ? new SaveDelete.AppendingObjectOutputStream(bufferOut)
                     : new ObjectOutputStream(bufferOut)) {

            objectOut.writeObject(deleteMail);
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