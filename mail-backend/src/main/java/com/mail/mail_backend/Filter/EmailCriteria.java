package com.mail.mail_backend.Filter;

import com.mail.mail_backend.Builder.EmailInfo;

import java.util.List;

public interface EmailCriteria {
    public List<EmailInfo> FilterTypes(List<EmailInfo> emails);
}
