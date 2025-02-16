package com.mail.mail_backend.Contact;


import java.io.*;


    public class SaveContacts {
        private ContactsUsers contactsUsers;

        public SaveContacts(ContactsUsers contactsUsers) {
            this.contactsUsers = contactsUsers;
            saveToFile();
        }

        private void saveToFile() {
            String fileName = "Contacts.ser";

            try (FileOutputStream fileOut = new FileOutputStream(fileName, true);
                 BufferedOutputStream bufferOut = new BufferedOutputStream(fileOut);
                 ObjectOutputStream objectOut = fileOut.getChannel().size() > 0
                         ? new com.mail.mail_backend.Contact.SaveContacts.AppendingObjectOutputStream(bufferOut)
                         : new ObjectOutputStream(bufferOut)) {

                objectOut.writeObject(contactsUsers);
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

