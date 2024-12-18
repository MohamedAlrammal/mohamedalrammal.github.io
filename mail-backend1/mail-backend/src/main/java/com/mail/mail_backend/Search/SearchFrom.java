package com.mail.mail_backend.Search;

import com.mail.mail_backend.Builder.EmailInfo;

import java.util.ArrayList;
import java.util.List;

public class SearchFrom implements SearchHandler{
    private SearchHandler nextHandler;
    private List<EmailInfo> filter=new ArrayList<>();
    @Override
    public List<EmailInfo> HandleRequest(List<EmailInfo>emailInfoList,EmailInfo emailInfo) {
        if(emailInfo.getSender()==null) {
            System.out.println("ok");
            return nextHandler.HandleRequest(emailInfoList, emailInfo);
        }
        else{
             for(EmailInfo e: emailInfoList){
                 if(e.getSender().equals(emailInfo.getSender()))
                     filter.add(e);
             }
            return nextHandler.HandleRequest(filter,emailInfo);
        }
    }

    @Override
    public void setNextHandler(SearchHandler nextHandler) {
        this.nextHandler=nextHandler;
    }
}
