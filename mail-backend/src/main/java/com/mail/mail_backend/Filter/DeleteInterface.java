package com.mail.mail_backend.Filter;

import com.mail.mail_backend.Builder.DeleteMail;
import com.mail.mail_backend.Builder.EmailInfo;

import java.util.List;

public interface DeleteInterface {
    public boolean FilterTypes(EmailInfo emailInfo);
}
