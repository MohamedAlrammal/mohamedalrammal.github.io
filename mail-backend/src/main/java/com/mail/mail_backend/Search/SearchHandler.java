package com.mail.mail_backend.Search;

import com.mail.mail_backend.Builder.EmailInfo;
import com.mail.mail_backend.Builder.attributeSearch;

import java.util.List;

public interface SearchHandler {
    public List<EmailInfo> HandleRequest (List<EmailInfo>emailInfoList, attributeSearch attributeSearch) ;
    public void setNextHandler(SearchHandler nextHandler);
}
