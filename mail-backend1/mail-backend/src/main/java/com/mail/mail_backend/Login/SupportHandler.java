package com.mail.mail_backend.Login;

public interface SupportHandler {
  public  String HandleRequest (Request request) ;
  public void setNextHandler(SupportHandler nextHandler);
}
