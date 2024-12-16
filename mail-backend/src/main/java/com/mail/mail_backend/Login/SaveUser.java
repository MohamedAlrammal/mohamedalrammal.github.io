package com.mail.mail_backend.Login;

import java.io.*;

public class SaveUser {
    private Request request;

    public SaveUser(Request request) {
        this.request = request;
        saveToFile();
    }

    // Method to save the request object to a file without overwriting existing data
    private void saveToFile() {
        String fileName = "user_data.ser"; // File name to save the object
        boolean append = new File(fileName).exists(); // Check if the file already exists

        try (FileOutputStream fileOut = new FileOutputStream(fileName, true);
             ObjectOutputStream objectOut = append
                     ? new AppendingObjectOutputStream(fileOut)
                     : new ObjectOutputStream(fileOut)) {

            objectOut.writeObject(request);
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
