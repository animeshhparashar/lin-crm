package com.lincrm.server.exception;

import java.io.Serial;

public class TokenExpiredException extends Exception{

    @Serial
    private static final long serialVersionUID = 3469144222595901138L;

    public TokenExpiredException(String message) {
        super(message);
    }
}