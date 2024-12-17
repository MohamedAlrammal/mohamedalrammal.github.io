package com.mail.mail_backend.Search;

import com.mail.mail_backend.Builder.EmailInfo;

import java.util.List;

public interface SearchHandler {
    public List<EmailInfo> HandleRequest (List<EmailInfo>emailInfoList,EmailInfo emailInfo) ;
    public void setNextHandler(SearchHandler nextHandler);
}
