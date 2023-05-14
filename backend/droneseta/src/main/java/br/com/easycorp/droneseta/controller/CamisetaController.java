package br.com.easycorp.droneseta.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.easycorp.droneseta.controller.exceptions.CamisetaNotFoudException;
import br.com.easycorp.droneseta.model.Camiseta;
import br.com.easycorp.droneseta.repositories.CamisetaRepository;

@RestController
public class CamisetaController {

    private final CamisetaRepository repository;

    CamisetaController(CamisetaRepository repository) {
        this.repository = repository;
    }

    // Aggregate root
    // tag::get-aggregate-root[]
    @GetMapping("/camisetas")
    List<Camiseta> all() {
        return repository.findAll();
    }

    @PostMapping("/camisetas")
    Camiseta newCamiseta(@RequestBody Camiseta novaCamiseta) {
        return repository.save(novaCamiseta);
    }

    @GetMapping("/camisetas/{id}")
    Camiseta one(@PathVariable int id) {
        return repository.findById(id).orElseThrow(() -> new CamisetaNotFoudException(id));
    }

    @PutMapping("/camisetas/{id}")
    Camiseta replaceCamiseta(@RequestBody Camiseta novaCamiseta, @PathVariable int id) {
        return repository.findById(id)
                .map(camiseta -> {
                    camiseta.setDescricao(novaCamiseta.getDescricao());
                    camiseta.setFoto(novaCamiseta.getFoto());
                    camiseta.setPreco(novaCamiseta.getPreco());

                    if (novaCamiseta.getEstoque().isEmpty()) {
                        camiseta.getEstoque().clear();
                    } else {
                        novaCamiseta.getEstoque().forEach(estoque -> {
                            if (!camiseta.getEstoque().contains(estoque)) {
                                camiseta.getEstoque().add(estoque);
                            }
                        });
                    }

                    camiseta.setEstoque(novaCamiseta.getEstoque());
                    return repository.save(camiseta);
                })
                .orElseGet(() -> {
                    novaCamiseta.setId(id);
                    return repository.save(novaCamiseta);
                });
    }

    @DeleteMapping("/camisetas/{id}")
    void deleteCamiseta(@PathVariable int id) {
        repository.deleteById(id);
    }

}
