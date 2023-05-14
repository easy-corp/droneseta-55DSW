package br.com.easycorp.droneseta.controller.services;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.easycorp.droneseta.model.Usuario;
import br.com.easycorp.droneseta.repositories.UsuarioRepository;

@Service
public class AuthService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public Usuario autenticar(String nomeUsuario, String senha) throws NoSuchAlgorithmException {
        Usuario user = usuarioRepository.findByUsername(nomeUsuario).get(0);
        if (user != null) {
            if (user.getPassword().equals(criptocrafaSenhaUsuario(senha))) {
                return user;
            }
        }
        return null;
    }

    public String criptocrafaSenhaUsuario(String senhaDescrioptografada) throws NoSuchAlgorithmException {
        MessageDigest m = MessageDigest.getInstance("MD5");
        m.update(senhaDescrioptografada.getBytes(), 0, senhaDescrioptografada.length());
        return new BigInteger(1, m.digest()).toString(16);
    }
}