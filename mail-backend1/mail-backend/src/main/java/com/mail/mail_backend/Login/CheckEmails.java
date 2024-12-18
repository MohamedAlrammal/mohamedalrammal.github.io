package com.mail.mail_backend.Login;

public class CheckEmails implements SupportHandler{
    private SupportHandler nextHandler;
    @Override
    public void setNextHandler(SupportHandler nextHandler) {
       this.nextHandler=nextHandler;
    }
    @Override
    public String HandleRequest(Request request)  {
        if(!request.getEmail().matches("^[\\w-\\.]+@gmail\\.com$"))
            return "No";
        else if(nextHandler!=null){
            System.out.println("Ok");
           return nextHandler.HandleRequest(request);
        }
        return "";
    }


}
