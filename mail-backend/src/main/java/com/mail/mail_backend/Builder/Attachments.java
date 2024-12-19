package com.mail.mail_backend.Builder;

import java.io.Serializable;

public class Attachments implements Serializable {
    private static final long serialVersionUID = 3915522481892032731L;
    private String fileName;
    private String fileType;
    private long fileSize;
    private String fileContent;

    public Attachments(String fileName, String fileType, long fileSize, String fileContent) {
        this.fileName = fileName;
        this.fileType = fileType;
        this.fileSize = fileSize;
        this.fileContent = fileContent;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public String getFileType() {
        return fileType;
    }

    public void setFileType(String fileType) {
        this.fileType = fileType;
    }

    public long getFileSize() {
        return fileSize;
    }

    public void setFileSize(long fileSize) {
        this.fileSize = fileSize;
    }

    public String getFileContent() {
        return fileContent;
    }

    public void setFileContent(String fileContent) {
        this.fileContent = fileContent;
    }
}