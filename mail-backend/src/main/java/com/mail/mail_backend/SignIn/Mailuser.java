package com.mail.mail_backend.SignIn;


import com.mail.mail_backend.Login.Request;

import java.io.*;
import java.util.ArrayList;

public class Mailuser {
    public String HandleUsers(User user) {
        ArrayList<Request> requestList = new ArrayList<>();
        String fileName = "user_data.ser";

        try (FileInputStream fileIn = new FileInputStream(fileName);
             ObjectInputStream objectIn = new ObjectInputStream(fileIn)) {

            while (true) { // Read until EOFException is thrown
                try {
                    Request request = (Request) objectIn.readObject();
                    requestList.add(request);
                } catch (EOFException e) {
                    break; // End of file reached
                }
            }

        } catch (FileNotFoundException e) {
            System.err.println("File not found: " + e.getMessage());
        } catch (IOException | ClassNotFoundException e) {
            System.err.println("Error while reading user data: " + e.getMessage());
        }
        for(Request r :requestList){
            if(r.getEmail().equals(user.getMail())&&r.getPassword().equals(user.getPassword()))
                return "yes";
        }
        return "No";
    }
}
