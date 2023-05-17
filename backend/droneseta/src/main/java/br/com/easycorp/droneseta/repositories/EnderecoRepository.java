package br.com.easycorp.droneseta.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.easycorp.droneseta.model.Endereco;

public interface EnderecoRepository extends JpaRepository<Endereco, Integer>{
    
}
