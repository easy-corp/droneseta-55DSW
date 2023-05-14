package br.com.easycorp.droneseta.controller.advices;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.http.HttpStatus;

import br.com.easycorp.droneseta.controller.exceptions.CamisetaNotFoudException;

@ControllerAdvice
public class CamisetaAdvice {

    @ResponseBody
    @ExceptionHandler(CamisetaNotFoudException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    String camisetaNotFoundHandler(CamisetaNotFoudException ex){
        return ex.getMessage();
    }
    
}
