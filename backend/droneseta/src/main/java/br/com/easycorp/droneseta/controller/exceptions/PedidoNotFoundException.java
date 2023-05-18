package br.com.easycorp.droneseta.controller.exceptions;

public class PedidoNotFoundException extends RuntimeException {
    public PedidoNotFoundException(int id) {
        super("pedido não encontrado com o id " + id);
    }
}
