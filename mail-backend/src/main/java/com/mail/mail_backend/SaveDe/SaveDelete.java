package com.mail.mail_backend.SaveDe;

import com.mail.mail_backend.Builder.DeleteMail;
import com.mail.mail_backend.SaveLoad.SaveMessage;

import java.io.*;

public class SaveDelete {
    private DeleteMail deleteMail;
    public SaveDelete(DeleteMail deleteMail){
        deleteMail=deleteMail;
        saveToFile();
    }
    private void saveToFile() {
        String fileName = "Delete_data.ser"; // File name to save the object
        boolean append = new File(fileName).exists(); // Check if the file already exists

        try (FileOutputStream fileOut = new FileOutputStream(fileName, true);
             ObjectOutputStream objectOut = append
                     ? new SaveDelete.AppendingObjectOutputStream(fileOut)
                     : new ObjectOutputStream(fileOut)) {

            objectOut.writeObject(deleteMail);
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
