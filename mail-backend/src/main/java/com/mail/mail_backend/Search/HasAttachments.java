package com.mail.mail_backend.Search;

import java.util.ArrayList;
import java.util.List;

import com.mail.mail_backend.Builder.EmailInfo;
import com.mail.mail_backend.Builder.attributeSearch;

public class HasAttachments implements SearchHandler{
    private SearchHandler nextHandler;
    private List<EmailInfo> filter=new ArrayList<>();
    @Override
    public List<EmailInfo> HandleRequest(List<EmailInfo>emailInfoList, attributeSearch attributeSearch) {
        if(!attributeSearch.isAttachment()) {
            System.out.println("ok");
            return nextHandler.HandleRequest(emailInfoList,attributeSearch);
        }
        else{
            for(EmailInfo e: emailInfoList){
                if(e.getAttachment()!=null)
                    filter.add(e);
            }
            return nextHandler.HandleRequest(filter,attributeSearch);
        }
    }

    @Override
    public void setNextHandler(SearchHandler nextHandler) {
        this.nextHandler=nextHandler;
    }
}
