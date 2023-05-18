package br.com.easycorp.droneseta.controller.advices;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.http.HttpStatus;

import br.com.easycorp.droneseta.controller.exceptions.UsuarioInvalidoException;

@ControllerAdvice
public class UsuarioInvalidoAdvice {

    @ResponseBody
    @ExceptionHandler(UsuarioInvalidoException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    String usuarioInvalidoHandler(UsuarioInvalidoException ex){
        return ex.getMessage();
    }
    
}
