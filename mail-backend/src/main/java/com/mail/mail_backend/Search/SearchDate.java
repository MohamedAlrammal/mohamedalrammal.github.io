package com.mail.mail_backend.Search;

import com.mail.mail_backend.Builder.EmailInfo;
import com.mail.mail_backend.Builder.attributeSearch;

import java.util.ArrayList;
import java.util.List;

public class SearchDate implements SearchHandler{
    private SearchHandler nextHandler;
    private List<EmailInfo> filter=new ArrayList<>();
    @Override
    public List<EmailInfo> HandleRequest(List<EmailInfo>emailInfoList, attributeSearch attributeSearch) {
        if(attributeSearch.getDate() ==null) {
            System.out.println("ok");
            return emailInfoList;
        }
        else{
            for(EmailInfo e: emailInfoList){
                if(e.getDate().equals(attributeSearch.getDate()))
                    filter.add(e);
            }
           return filter;
        }
    }

    @Override
    public void setNextHandler(SearchHandler nextHandler) {
        this.nextHandler=nextHandler;
    }
}
