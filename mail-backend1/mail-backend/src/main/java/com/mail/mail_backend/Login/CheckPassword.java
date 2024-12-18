package com.mail.mail_backend.Login;



public class CheckPassword implements SupportHandler {
    private SupportHandler nextHandler;
    @Override
    public void setNextHandler(SupportHandler nextHandler) {

        this.nextHandler=nextHandler;
    }
    @Override
    public String HandleRequest(Request request) {
        if(!request.getPassword().equals( request.getRePassword()))
            return "No";
       else {
            SaveUser saveuser = new SaveUser(request);
            return "Ok";
        }
    }


}
