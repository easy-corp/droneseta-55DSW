package br.com.easycorp.droneseta.database;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import br.com.easycorp.droneseta.model.Camiseta;
import br.com.easycorp.droneseta.repositories.CamisetaRepository;

@Configuration
public class DataBaseLoader {
    private static final Logger log = LoggerFactory.getLogger(DataBaseLoader.class);

    @Bean
    CommandLineRunner initDataBase(CamisetaRepository repository){
        return args -> {
            log.info("Pré-carregando " + repository.save(new Camiseta("Linkin park baby look", "test", 25.50)));
        };
    }

}
