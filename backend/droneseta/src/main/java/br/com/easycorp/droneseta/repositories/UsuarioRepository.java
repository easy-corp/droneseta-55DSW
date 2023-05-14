package br.com.easycorp.droneseta.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.easycorp.droneseta.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {

    List<Usuario> findByUsername(String username);

}