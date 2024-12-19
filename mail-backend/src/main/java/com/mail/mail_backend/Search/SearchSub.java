package com.mail.mail_backend.Search;

import com.mail.mail_backend.Builder.EmailInfo;
import com.mail.mail_backend.Builder.attributeSearch;

import java.util.ArrayList;
import java.util.List;

public class SearchSub implements SearchHandler{
    private SearchHandler nextHandler;
    private List<EmailInfo> filter=new ArrayList<>();
    @Override
    public List<EmailInfo> HandleRequest(List<EmailInfo>emailInfoList, attributeSearch attributeSearch) {
        if(attributeSearch.getSubject()==null) {
            System.out.println("ok");
            return nextHandler.HandleRequest(emailInfoList, attributeSearch);
        }
        else{
            for(EmailInfo e: emailInfoList){
                if(e.getSubject().equals(attributeSearch.getSubject()))
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
