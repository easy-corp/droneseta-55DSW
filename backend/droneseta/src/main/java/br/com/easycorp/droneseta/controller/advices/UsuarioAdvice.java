package br.com.easycorp.droneseta.controller.advices;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.http.HttpStatus;
import br.com.easycorp.droneseta.controller.exceptions.UsuarioNotFoundException;

@ControllerAdvice
public class UsuarioAdvice {

    @ResponseBody
    @ExceptionHandler(UsuarioNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    String camisetaNotFoundHandler(UsuarioNotFoundException ex){
        return ex.getMessage();
    }
    
}
