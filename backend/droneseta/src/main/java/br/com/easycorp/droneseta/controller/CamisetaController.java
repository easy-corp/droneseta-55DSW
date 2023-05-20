package br.com.easycorp.droneseta.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.easycorp.droneseta.controller.exceptions.PedidoNotFoundException;
import br.com.easycorp.droneseta.model.Camiseta;
import br.com.easycorp.droneseta.model.Estoque;
import br.com.easycorp.droneseta.repositories.CamisetaRepository;
import br.com.easycorp.droneseta.repositories.EstoqueRepository;

@RestController
public class CamisetaController {

    private final CamisetaRepository repository;
    private final EstoqueRepository estoqueRepo;

    CamisetaController(CamisetaRepository repository, EstoqueRepository estoqueRepo) {
        this.repository = repository;
        this.estoqueRepo = estoqueRepo;
    }

    @GetMapping("/camisetas")
    List<Camiseta> all() {
        return repository.findAll();
    }

    @PostMapping("/camisetas")
    Camiseta newCamiseta(@RequestBody Camiseta novaCamiseta) {
        Camiseta camiseta = repository.save(novaCamiseta);

        for (Estoque estoque : camiseta.getEstoque()) {
            estoque.setCamiseta(camiseta);
            estoqueRepo.save(estoque);
        }

        return camiseta;
    }

    @GetMapping("/camisetas/{id}")
    Camiseta one(@PathVariable int id) {
        return repository.findById(id).orElseThrow(() -> new PedidoNotFoundException(id));
    }

    @PutMapping("/camisetas/{id}")
    Camiseta replaceCamiseta(@RequestBody Camiseta novaCamiseta, @PathVariable int id) {
        return repository.findById(id)
                .map(camiseta -> {
                    camiseta.setDescricao(novaCamiseta.getDescricao());

                    if (!novaCamiseta.getFoto().equals("")) {
                        camiseta.setFoto(novaCamiseta.getFoto());
                    }

                    camiseta.setPreco(novaCamiseta.getPreco());
                    camiseta.setEstoque(novaCamiseta.getEstoque());

                    Camiseta cam = repository.save(novaCamiseta);

                    for (Estoque estoque : camiseta.getEstoque()) {
                        estoque.setCamiseta(camiseta);
                        estoqueRepo.save(estoque);
                    }

                    return cam;
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
