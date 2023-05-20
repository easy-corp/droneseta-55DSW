package br.com.easycorp.droneseta.controller.services;

import java.util.Date;
import java.util.concurrent.TimeUnit;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import br.com.easycorp.droneseta.DronesetaApplication;
import br.com.easycorp.droneseta.model.OrdemEntrega;
import br.com.easycorp.droneseta.model.Pedido;
import br.com.easycorp.droneseta.model.SituacaoPedido;
import br.com.easycorp.droneseta.repositories.OrdemEntregaRepository;
import br.com.easycorp.droneseta.repositories.PedidoRepository;

@Component
public class OrdemScheduler {

    private OrdemEntregaRepository ordemRepo;
    private PedidoRepository pedidoRepo;

    public OrdemScheduler(OrdemEntregaRepository repoOrdem, PedidoRepository pedidoRepo) {
        this.ordemRepo = repoOrdem;
        this.pedidoRepo = pedidoRepo;
    }

    @Scheduled(fixedDelay = 60000)
    public void verifyOrdems() {
        System.out.println("Verificando Entregas...");

        Date dataAtual = new Date();

        for (OrdemEntrega ordem : ordemRepo.findAll()) {
            if (ordem.getDataEntrega() == null) {
                long diferencaMilissegundos = ordem.getDataSaida().getTime() - dataAtual.getTime();
                long diferencaMinutos = TimeUnit.MILLISECONDS.toMinutes(diferencaMilissegundos);

                if (Math.abs(diferencaMinutos) >= DronesetaApplication.TEMPO_ENTREGA) {
                    ordem.setDataEntrega(dataAtual);
                    for (Pedido pedido : ordem.getPedidos()) {
                        pedido.setSituacao(SituacaoPedido.ENTREGUE);
                        pedidoRepo.save(pedido);
                    }

                    ordemRepo.save(ordem);
                    System.out.println("Atualizado ordem " + ordem.getId() + " como entregue.");
                }
            }
        }
    }

}
