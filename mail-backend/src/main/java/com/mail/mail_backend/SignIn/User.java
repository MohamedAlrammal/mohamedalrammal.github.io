package com.mail.mail_backend.SignIn;

public class User {
    private static User instance = null; // Single instance of the class
    private String mail;
    private String password;

    // Private constructor to prevent instantiation
    private User() {
    }

    // Public static method to provide access to the single instance
    public static User getInstance() {
        if (instance == null) {
            synchronized (User.class) { // Thread-safe initialization
                if (instance == null) {
                    instance = new User();
                }
            }
        }
        return instance;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
