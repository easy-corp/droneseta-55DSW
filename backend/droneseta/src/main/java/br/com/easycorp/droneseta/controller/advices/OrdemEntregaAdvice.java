package br.com.easycorp.droneseta.controller.advices;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.http.HttpStatus;

import br.com.easycorp.droneseta.controller.exceptions.OrdemEntregaNotFoundException;

@ControllerAdvice
public class OrdemEntregaAdvice {

    @ResponseBody
    @ExceptionHandler(OrdemEntregaNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    String ordemEntregaNotFoundHandler(OrdemEntregaNotFoundException ex){
        return ex.getMessage();
    }
    
}
