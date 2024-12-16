package com.mail.mail_backend.Builder;

import java.io.Serializable;

public class person implements Serializable {
    private static final long serialVersionUID = 3915522481892032731L;
    private String guest;

    public person(String guest) {
        this.guest = guest;
    }

    public String getGuest() {
        return guest;
    }

    public void setGuest(String guest) {
        this.guest = guest;
    }
}
