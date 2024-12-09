package com.mail.mail_backend.Login;



public class CheckNames implements SupportHandler{
    private SupportHandler nextHandler;
    @Override
    public void setNextHandler(SupportHandler nextHandler) {
        this.nextHandler=nextHandler;
    }

    @Override
    public String HandleRequest(Request request){
        if (!request.getFirstName().matches("^[a-zA-Z]*$") && !request.getLastName().matches("^[a-zA-Z]*$")) {
            return "No";
        }
        else if(nextHandler!=null){
            System.out.println("Ok");
           return nextHandler.HandleRequest(request);
        }
    return "";
    }


}
