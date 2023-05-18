package br.com.easycorp.droneseta.controller.exceptions;

public class SenhaIncorretaException extends RuntimeException {
    public SenhaIncorretaException() {
        super("Senha Incorreta!");
    }
}
