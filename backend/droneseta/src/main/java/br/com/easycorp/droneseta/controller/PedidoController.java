package br.com.easycorp.droneseta.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.easycorp.droneseta.controller.exceptions.EstoqueNotFoundException;
import br.com.easycorp.droneseta.controller.exceptions.PedidoNotFoundException;
import br.com.easycorp.droneseta.model.Estoque;
import br.com.easycorp.droneseta.model.OrdemEntrega;
import br.com.easycorp.droneseta.model.Pedido;
import br.com.easycorp.droneseta.repositories.EstoqueRepository;
import br.com.easycorp.droneseta.repositories.OrdemEntregaRepository;
import br.com.easycorp.droneseta.repositories.PedidoRepository;

@RestController
public class PedidoController {

    private final PedidoRepository repository;
    private final EstoqueRepository estoqueRepo;
    private final OrdemEntregaRepository ordemRepo;

    PedidoController(PedidoRepository repository, EstoqueRepository estoqueRepo, OrdemEntregaRepository ordemRepo) {
        this.repository = repository;
        this.estoqueRepo = estoqueRepo;
        this.ordemRepo = ordemRepo;
    }

    @GetMapping("/pedidos")
    List<Pedido> all() {
        return repository.findAll();
    }

    @PostMapping("/pedidos")
    List<OrdemEntrega> newPedido(@RequestBody Pedido novoPedido) {
        Pedido pedido = repository.save(novoPedido);
        for (Estoque e : novoPedido.getItens()) {
            Estoque estoque = estoqueRepo.findById(e.getSequencia())
                    .orElseThrow(() -> new EstoqueNotFoundException(e.getSequencia()));
            estoque.setPedido(pedido);
            estoque.setVendido(true);
            this.estoqueRepo.save(estoque);
        }

        int qtdEntregasAtual = 0;
        for (OrdemEntrega o : ordemRepo.findAll()) {
            if (o.getDataEntrega() == null) {
                qtdEntregasAtual++;
            }
        }

        List<OrdemEntrega> ordens = new ArrayList<>();

        if (pedido.getItens().size() <= 10) {
            OrdemEntrega ordem = new OrdemEntrega();
            ordem.getPedidos().add(pedido);
            ordem.setDataSaida(new Date());
            ordem.setPrevisaoDeEntrega(qtdEntregasAtual + 1);
            ordens.add(ordemRepo.save(ordem));
        } else {
            for (int i = 0; i < pedido.getItens().size(); i += 10) {
                qtdEntregasAtual++;
                OrdemEntrega ordemEntrega = new OrdemEntrega();
                ordemEntrega.getPedidos().add(pedido);
                ordemEntrega.setDataSaida(new Date());
                ordemEntrega.setPrevisaoDeEntrega(qtdEntregasAtual);
                ordens.add(ordemEntrega);
            }
        }
        return ordens;
    }

    @GetMapping("/pedidos/{id}")
    Pedido one(@PathVariable int id) {
        return repository.findById(id).orElseThrow(() -> new PedidoNotFoundException(id));
    }

    @PutMapping("/pedidos/{id}")
    Pedido replacePedido(@RequestBody Pedido novoPedido, @PathVariable int id) {
        return repository.findById(id)
                .map(pedido -> {
                    pedido.setEndereco(novoPedido.getEndereco());
                    pedido.setItens(novoPedido.getItens());
                    pedido.setSituacao(novoPedido.getSituacao());
                    pedido.setUsuario(novoPedido.getUsuario());
                    return repository.save(pedido);
                })
                .orElseGet(() -> {
                    novoPedido.setId(id);
                    return repository.save(novoPedido);
                });
    }

    @DeleteMapping("/pedidos/{id}")
    void deletePedido(@PathVariable int id) {
        repository.deleteById(id);
    }

}
