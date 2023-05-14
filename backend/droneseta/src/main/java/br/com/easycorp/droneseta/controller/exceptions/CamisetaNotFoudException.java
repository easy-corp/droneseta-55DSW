package br.com.easycorp.droneseta.controller.exceptions;

public class CamisetaNotFoudException extends RuntimeException {
    public CamisetaNotFoudException(int id) {
        super("camiseta não encontrada com o id " + id);
    }
}
