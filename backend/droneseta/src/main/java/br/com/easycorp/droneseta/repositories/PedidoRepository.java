package br.com.easycorp.droneseta.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.easycorp.droneseta.model.Pedido;

public interface PedidoRepository extends JpaRepository<Pedido, Integer>{
    
}
