package br.com.easycorp.droneseta.controller.exceptions;

public class UsuarioInvalidoException extends RuntimeException {
    public UsuarioInvalidoException(String username) {
        super("Usuário " + username + " inválido ou inexistente!");
    }
}
