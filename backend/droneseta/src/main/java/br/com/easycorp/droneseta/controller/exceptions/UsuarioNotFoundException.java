package br.com.easycorp.droneseta.controller.exceptions;

public class UsuarioNotFoundException extends RuntimeException {
    public UsuarioNotFoundException(int id) {
        super("usuário não encontrado com o id " + id);
    }
}
