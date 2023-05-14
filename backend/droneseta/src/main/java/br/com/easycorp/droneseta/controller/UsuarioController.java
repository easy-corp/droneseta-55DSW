package br.com.easycorp.droneseta.controller;

import java.security.NoSuchAlgorithmException;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.easycorp.droneseta.controller.exceptions.UsuarioNotFoundException;
import br.com.easycorp.droneseta.controller.services.AuthService;
import br.com.easycorp.droneseta.model.Usuario;
import br.com.easycorp.droneseta.repositories.UsuarioRepository;
import jakarta.servlet.http.HttpSession;

@RestController
public class UsuarioController {

    @Autowired
    private AuthService authService;

    private UsuarioRepository repository;

    UsuarioController(UsuarioRepository repository) {
        this.repository = repository;
    }

    // Aggregate root
    // tag::get-aggregate-root[]
    @GetMapping("/usuarios")
    List<Usuario> all() {
        return repository.findAll();
    }

    @PostMapping("/usuarios/login")
    Usuario login(@RequestBody Map<String, String> params, HttpSession session) throws NoSuchAlgorithmException {
        Usuario user = authService.autenticar(params.get("username"), params.get("password"));
        if (user != null) {
            session.setAttribute("usuario", user);
            return user;
        }
        return null;
    }

    @GetMapping("/usuarios/view_session_user")
    Usuario viewSession(HttpSession session){
        return (Usuario) session.getAttribute("usuario");
    }

    @PostMapping("/usuarios")
    Usuario newUser(@RequestBody Usuario novoUsuario) throws NoSuchAlgorithmException {
        novoUsuario.setPassword(authService.criptocrafaSenhaUsuario(novoUsuario.getPassword()));
        return repository.save(novoUsuario);
    }

    @GetMapping("/usuarios/{id}")
    Usuario one(@PathVariable int id) {
        return repository.findById(id).orElseThrow(() -> new UsuarioNotFoundException(id));
    }

    @PutMapping("/usuarios/{id}")
    Usuario replaceUsuario(@RequestBody Usuario novoUsuario, @PathVariable int id) {
        return repository.findById(id)
                .map(usuario -> {
                    usuario.setCartaoCredito(novoUsuario.getCartaoCredito());
                    usuario.setDataNascimento(novoUsuario.getDataNascimento());
                    try {
                        usuario.setPassword(authService.criptocrafaSenhaUsuario(novoUsuario.getPassword()));
                    } catch (NoSuchAlgorithmException e) {
                        e.printStackTrace();
                    }
                    usuario.setEmail(novoUsuario.getEmail());
                    usuario.setTipo(novoUsuario.getTipo());
                    usuario.setUsername(novoUsuario.getUsername());
                    return repository.save(usuario);
                })
                .orElseGet(() -> {
                    novoUsuario.setId(id);
                    return repository.save(novoUsuario);
                });
    }

    @DeleteMapping("/usuarios/{id}")
    void deleteCamiseta(@PathVariable int id) {
        repository.deleteById(id);
    }

}