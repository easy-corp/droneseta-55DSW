package br.com.easycorp.droneseta.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.easycorp.droneseta.controller.exceptions.OrdemEntregaNotFoundException;
import br.com.easycorp.droneseta.model.OrdemEntrega;
import br.com.easycorp.droneseta.repositories.OrdemEntregaRepository;

@RestController
public class OrdemEntregaController {

    private final OrdemEntregaRepository repository;

    OrdemEntregaController(OrdemEntregaRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/ordens")
    List<OrdemEntrega> all() {
        return repository.findAll();
    }

    @PostMapping("/ordens")
    OrdemEntrega newOrdem(@RequestBody OrdemEntrega novaOrdem) {
        return repository.save(novaOrdem);
    }

    @GetMapping("/ordens/{id}")
    OrdemEntrega one(@PathVariable int id) {
        return repository.findById(id).orElseThrow(() -> new OrdemEntregaNotFoundException(id));
    }

    @PutMapping("/ordens/{id}")
    OrdemEntrega replacePedido(@RequestBody OrdemEntrega novaOrdem, @PathVariable int id) {
        return repository.findById(id)
                .map(ordem -> {
                    ordem.setDataEntrega(novaOrdem.getDataEntrega());
                    ordem.setDataSaida(novaOrdem.getDataSaida());
                    ordem.setPedidos(novaOrdem.getPedidos());
                    return repository.save(ordem);
                })
                .orElseGet(() -> {
                    novaOrdem.setId(id);
                    return repository.save(novaOrdem);
                });
    }

    @DeleteMapping("/ordens/{id}")
    void deleteOrdem(@PathVariable int id) {
        repository.deleteById(id);
    }

}
