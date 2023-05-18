package br.com.easycorp.droneseta.controller.exceptions;

public class OrdemEntregaNotFoundException extends RuntimeException {
    public OrdemEntregaNotFoundException(int id) {
        super("ordem não encontrada com o id " + id);
    }
}
