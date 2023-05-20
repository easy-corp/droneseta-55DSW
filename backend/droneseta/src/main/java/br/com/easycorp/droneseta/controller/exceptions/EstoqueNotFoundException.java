package br.com.easycorp.droneseta.controller.exceptions;

public class EstoqueNotFoundException extends RuntimeException {
    public EstoqueNotFoundException(int id) {
        super("Estoque não encontrada com a sequência " + id);
    }
}
