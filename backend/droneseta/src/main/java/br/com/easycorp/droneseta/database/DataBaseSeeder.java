package br.com.easycorp.droneseta.database;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import br.com.easycorp.droneseta.controller.services.AuthService;
import br.com.easycorp.droneseta.model.Camiseta;
import br.com.easycorp.droneseta.model.Endereco;
import br.com.easycorp.droneseta.model.Estoque;
import br.com.easycorp.droneseta.model.OrdemEntrega;
import br.com.easycorp.droneseta.model.Pedido;
import br.com.easycorp.droneseta.model.Role;
import br.com.easycorp.droneseta.model.SituacaoPedido;
import br.com.easycorp.droneseta.model.TipoEndereco;
import br.com.easycorp.droneseta.model.Usuario;
import br.com.easycorp.droneseta.repositories.CamisetaRepository;
import br.com.easycorp.droneseta.repositories.EnderecoRepository;
import br.com.easycorp.droneseta.repositories.EstoqueRepository;
import br.com.easycorp.droneseta.repositories.OrdemEntregaRepository;
import br.com.easycorp.droneseta.repositories.PedidoRepository;
import br.com.easycorp.droneseta.repositories.UsuarioRepository;
import jakarta.transaction.Transactional;

@Configuration
@EnableTransactionManagement
public class DataBaseSeeder {
    private static final Logger log = LoggerFactory.getLogger(DataBaseSeeder.class);

    @Autowired
    private AuthService authService;

    private List<Usuario> createdUsers = new ArrayList<>();

    private Map<Usuario, List<Endereco>> createdEnderecos = new HashMap<>();

    private List<Camiseta> camisetas = new ArrayList<>();

    private List<Estoque> estoques = new ArrayList<>();

    private List<Pedido> pedidos = new ArrayList<>();

    private List<OrdemEntrega> ordens = new ArrayList<>();

    private final String IMG_1 = "data:image/jpeg;base64,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";
    private final String IMG_2 = "data:image/jpeg;base64,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:image/jpeg;base64,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";
    private final String IMG_3 = "data:image/jpeg;base64,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data:image/jpeg;base64,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";

    @Bean
    CommandLineRunner doSeedUsuario(UsuarioRepository usuarioRepo) {
        return args -> {
            log.info("Inicializando Seeding da tabela de Usuarios...");

            Usuario usuario_a = new Usuario(
                    Role.ADMIN,
                    "Luis Felipe da Silva",
                    parseData("15/01/2001"),
                    "108.432.456-76",
                    "luis.silva@gmail.com",
                    "1234-2456-3456-4567",
                    "luis",
                    authService.criptocrafaSenhaUsuario("123"));

            Usuario usuario_b = new Usuario(
                    Role.ADMIN,
                    "Murilo Antunes Goedert",
                    parseData("15/02/1996"),
                    "008.232.446-72",
                    "murilo.goedert@gmail.com",
                    "1234-2456-3456-4567",
                    "murilo",
                    authService.criptocrafaSenhaUsuario("123"));

            Usuario usuario_c = new Usuario(
                    Role.USER,
                    "John Doe",
                    parseData("15/02/2002"),
                    "108.33.446-77",
                    "john.doe@gmail.com",
                    "1234-2456-3456-4567",
                    "john",
                    authService.criptocrafaSenhaUsuario("123"));

            createdUsers.add(usuarioRepo.save(usuario_a));
            createdUsers.add(usuarioRepo.save(usuario_b));
            createdUsers.add(usuarioRepo.save(usuario_c));

        };
    }

    @Bean
    @Order(value = 1)
    CommandLineRunner doSeedEndereco(EnderecoRepository enderecoRepo) {
        return args -> {
            log.info("Inicializando Seeding da tabela de Enderecos...");

            Endereco endereco_a = new Endereco(createdUsers.get(0), TipoEndereco.COBRANCA,
                    "Rua das Goiabeiras, 57, Bairro Terezina, São Paulo - SP");
            Endereco endereco_b = new Endereco(createdUsers.get(0), TipoEndereco.RESIDENCIAL,
                    "Rua das Orquideas, 257, Bairro Gamelão, São Paulo - SP");
            Endereco endereco_c = new Endereco(createdUsers.get(1), TipoEndereco.RESIDENCIAL,
                    "Rua das Flores, 123, Bairro Jardim, São Paulo - SP");
            Endereco endereco_d = new Endereco(createdUsers.get(1), TipoEndereco.COBRANCA,
                    "Avenida Central, 456, Bairro Centro, Rio de Janeiro - RJ");
            Endereco endereco_e = new Endereco(createdUsers.get(1), TipoEndereco.RESIDENCIAL,
                    "Rua das Palmeiras, 789, Bairro Arborizado, Belo Horizonte - MG");
            Endereco endereco_f = new Endereco(createdUsers.get(2), TipoEndereco.COBRANCA,
                    "Avenida Principal, 1010, Bairro Comercial, São Paulo - SP");
            Endereco endereco_g = new Endereco(createdUsers.get(2), TipoEndereco.RESIDENCIAL,
                    "Rua dos Pinheiros, 222, Bairro Tranquilo, Porto Alegre - RS");
            Endereco endereco_h = new Endereco(createdUsers.get(1), TipoEndereco.COBRANCA,
                    "Avenida Secundária, 333, Bairro Movimentado, Salvador - BA");
            Endereco endereco_i = new Endereco(createdUsers.get(2), TipoEndereco.RESIDENCIAL,
                    "Rua das Oliveiras, 444, Bairro Verde, Curitiba - PR");
            Endereco endereco_j = new Endereco(createdUsers.get(0), TipoEndereco.COBRANCA,
                    "Avenida Lateral, 555, Bairro Industrial, Recife - PE");
            Endereco endereco_k = new Endereco(createdUsers.get(0), TipoEndereco.RESIDENCIAL,
                    "Rua das Cerejeiras, 666, Bairro Calmo, Florianópolis - SC");
            Endereco endereco_l = new Endereco(createdUsers.get(1), TipoEndereco.COBRANCA,
                    "Avenida Movimentada, 777, Bairro Central, Brasília - DF");

            List<Endereco> enderecos_a = new ArrayList<>();
            List<Endereco> enderecos_b = new ArrayList<>();
            List<Endereco> enderecos_c = new ArrayList<>();

            enderecos_a.add(enderecoRepo.save(endereco_a));
            enderecos_a.add(enderecoRepo.save(endereco_b));
            enderecos_a.add(enderecoRepo.save(endereco_j));
            enderecos_a.add(enderecoRepo.save(endereco_k));

            enderecos_b.add(enderecoRepo.save(endereco_c));
            enderecos_b.add(enderecoRepo.save(endereco_d));
            enderecos_b.add(enderecoRepo.save(endereco_e));
            enderecos_b.add(enderecoRepo.save(endereco_h));
            enderecos_b.add(enderecoRepo.save(endereco_l));

            enderecos_c.add(enderecoRepo.save(endereco_f));
            enderecos_c.add(enderecoRepo.save(endereco_g));
            enderecos_c.add(enderecoRepo.save(endereco_i));

            createdEnderecos.put(createdUsers.get(0), enderecos_a);
            createdEnderecos.put(createdUsers.get(1), enderecos_b);
            createdEnderecos.put(createdUsers.get(2), enderecos_c);

        };

    }

    @Bean
    @Order(value = 2)
    @Transactional
    CommandLineRunner doSeedCamiseta(CamisetaRepository camisetaRepo) {
        return args -> {
            log.info("Inicializando Seeding da tabela de Camisetas...");
            camisetas.add(new Camiseta("Gola Polo, Simples", IMG_1, 25.50));
            camisetas.add(new Camiseta("Gola Polo, Básica", IMG_1, 25.50));
            camisetas.add(new Camiseta("Gola V, Listrada", IMG_2, 49.99));
            camisetas.add(new Camiseta("Manga Longa, Estampada", IMG_3, 35.75));
            camisetas.add(new Camiseta("Regata, Lisa", IMG_1, 19.99));
            camisetas.add(new Camiseta("Gola Polo, Xadrez", IMG_2, 54.90));
            camisetas.add(new Camiseta("Camiseta Manga Curta, Lisa", IMG_3, 29.99));
            camisetas.add(new Camiseta("Camiseta Esportiva, DryFit", IMG_1, 39.99));
            camisetas.add(new Camiseta("Camiseta Estampada, Floral", IMG_2, 44.50));
            camisetas.add(new Camiseta("Gola Polo, Listrada", IMG_3, 31.80));
            camisetas.add(new Camiseta("Camiseta Manga Longa, Estampada", IMG_1, 47.50));
            camisetas.add(new Camiseta("Camiseta Básica, Manga Curta", IMG_2, 25.99));
            camisetas.add(new Camiseta("Camiseta Polo, Slim Fit", IMG_3, 59.90));
            camisetas.add(new Camiseta("Camiseta Lisa, Decote V", IMG_1, 22.75));
            camisetas.add(new Camiseta("Regata, Estampada", IMG_2, 27.50));
            camisetas.add(new Camiseta("Camiseta Gola V, Degradê", IMG_3, 41.25));
            camisetas.add(new Camiseta("Camiseta Manga Longa, Xadrez", IMG_1, 56.80));
            camisetas.add(new Camiseta("Camiseta Básica, Gola Redonda", IMG_2, 18.99));
            camisetas.add(new Camiseta("Camiseta Estampada, Animal Print", IMG_3,
                    38.50));
            camisetas.add(new Camiseta("Gola Polo, Listrada Colorida", IMG_1, 45.90));
            camisetas.add(new Camiseta("Camiseta Manga Curta, Lisa", IMG_2, 24.75));
            camisetas.add(new Camiseta("Camiseta Esportiva, DryFit", IMG_3, 33.99));
            camisetas.add(new Camiseta("Camiseta Estampada, Geométrica", IMG_1, 29.50));
            camisetas.add(new Camiseta("Camiseta Polo, Regular Fit", IMG_2, 54.90));
            camisetas.add(new Camiseta("Camiseta Lisa, Manga Longa", IMG_3, 37.80));
            camisetas.add(new Camiseta("Regata, Estampada Floral", IMG_1, 24.99));
            camisetas.add(new Camiseta("Camiseta Manga Curta, Xadrez", IMG_2, 32.50));
            camisetas.add(new Camiseta("Camiseta Básica, Gola V", IMG_3, 21.75));
            camisetas.add(new Camiseta("Camiseta Estampada, Animal Print", IMG_1,
                    39.90));
            camisetas.add(new Camiseta("Gola Polo, Lisa", IMG_2, 26.50));
            camisetas.add(new Camiseta("Camiseta Manga Longa, Listrada", IMG_3, 43.99));
            camisetas.add(new Camiseta("Camiseta Esportiva, DryFit", IMG_1, 35.90));
            camisetas.add(new Camiseta("Camiseta Estampada, Floral", IMG_2, 28.50));
            camisetas.add(new Camiseta("Camiseta Polo, Slim Fit", IMG_3, 49.90));
            camisetas.add(new Camiseta("Camiseta Lisa, Decote V", IMG_1, 23.75));
            camisetas.add(new Camiseta("Regata, Estampada", IMG_2, 26.50));
            camisetas.add(new Camiseta("Camiseta Gola V, Degradê", IMG_3, 38.25));
            camisetas.add(new Camiseta("Camiseta Manga Longa, Xadrez", IMG_1, 49.80));
            camisetas.add(new Camiseta("Camiseta Básica, Gola Redonda", IMG_2, 20.99));
            camisetas.add(new Camiseta("Camiseta Estampada, Animal Print", IMG_3,
                    36.50));
            camisetas.add(new Camiseta("Gola Polo, Listrada Colorida", IMG_1, 43.90));
            camisetas.add(new Camiseta("Camiseta Manga Curta, Lisa", IMG_2, 22.75));
            camisetas.add(new Camiseta("Camiseta Esportiva, DryFit", IMG_3, 31.99));
            camisetas.add(new Camiseta("Camiseta Estampada, Geométrica", IMG_1, 27.50));
            camisetas.add(new Camiseta("Camiseta Polo, Regular Fit", IMG_2, 49.90));
            camisetas.add(new Camiseta("Camiseta Lisa, Manga Longa", IMG_3, 35.80));
            camisetas.add(new Camiseta("Regata, Estampada Floral", IMG_1, 22.99));
            camisetas.add(new Camiseta("Camiseta Manga Curta, Xadrez", IMG_2, 30.50));
            camisetas.add(new Camiseta("Camiseta Básica, Gola V", IMG_3, 19.75));
            camisetas.add(new Camiseta("Camiseta Estampada, Animal Print", IMG_1,
                    37.90));
            camisetas.add(new Camiseta("Gola Polo, Lisa", IMG_2, 24.50));

            for (Camiseta c : camisetas) {
                camisetaRepo.save(c);
            }
        };

    }

    @Bean
    @Order(value = 3)
    @Transactional
    CommandLineRunner doSeedEstoque(EstoqueRepository estoqueRepo) {
        return args -> {
            log.info("Inicializando Seeding da tabela de Estoques...");
            for (Camiseta c : camisetas) {
                estoques.add(new Estoque(c, "P", "#ffffff", false));
                estoques.add(new Estoque(c, "M", "#cccccc", false));
                estoques.add(new Estoque(c, "G", "#999999", false));
            }

            for (Estoque e : estoques) {
                estoqueRepo.save(e);
            }

        };
    }

    @Bean
    @Order(value = 4)
    @Transactional
    CommandLineRunner doSeedPedido(PedidoRepository pedidoRepo) {
        return args -> {
            log.info("Inicializando Seeding da tabela de Ordens de Entrega...");
            for (Usuario user : createdUsers) {

                List<Estoque> estoquesPedido = new ArrayList<>();
                Collections.shuffle(estoques);
                Estoque estoque = estoques.get(0);
                int count = 0;
                while (count < 3 && estoquesPedido.contains(estoque)) {
                    estoquesPedido.add(estoque);
                    Collections.shuffle(estoques);
                    estoque = estoques.get(0);
                    count++;
                }

                Pedido p1 = new Pedido(user, estoquesPedido, SituacaoPedido.ENTREGUE,
                        createdEnderecos.get(user)
                                .get((int) Math.floor(Math.random() * createdEnderecos.get(user).size())));
                Pedido p2 = new Pedido(user, estoquesPedido, SituacaoPedido.ENTREGUE,
                        createdEnderecos.get(user)
                                .get((int) Math.floor(Math.random() * createdEnderecos.get(user).size())));
                Pedido p3 = new Pedido(user, estoquesPedido, SituacaoPedido.ENTREGUE,
                        createdEnderecos.get(user)
                                .get((int) Math.floor(Math.random() * createdEnderecos.get(user).size())));

                pedidos.add(pedidoRepo.save(p1));
                pedidos.add(pedidoRepo.save(p2));
                pedidos.add(pedidoRepo.save(p3));

            }

        };
    }

    @Bean
    @Order(value = 5)
    @Transactional
    CommandLineRunner doSeedOrdemEntrega(OrdemEntregaRepository ordemRepo) {
        return args -> {
            for (int i = 0; i < pedidos.size(); i += 3) {
                OrdemEntrega ordem = new OrdemEntrega();
                ordem.getPedidos().add(pedidos.get(i));
                ordem.getPedidos().add(pedidos.get(i + 1));
                ordem.getPedidos().add(pedidos.get(i + 2));
                ordem.setDataSaida(parseDataHora("14/05/2023 10:20:00"));
                ordem.setDataEntrega(parseDataHora("14/05/2023 10:59:00"));
                ordens.add(ordem);
            }

            for (OrdemEntrega o : ordens) {
                ordemRepo.save(o);
            }
        };
    }

    private Date parseData(String data) throws ParseException {
        DateFormat format = new SimpleDateFormat("dd/MM/yyyy");
        return format.parse(data);
    }

    private Date parseDataHora(String dataHora) throws ParseException {
        DateFormat format = new SimpleDateFormat("dd/MM/yyyy hh:mm:ss");
        return format.parse(dataHora);
    }

}
