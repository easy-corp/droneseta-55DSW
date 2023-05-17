package br.com.easycorp.droneseta.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.easycorp.droneseta.model.OrdemEntrega;

public interface OrdemEntregaRepository extends JpaRepository<OrdemEntrega, Integer> {
    
}
