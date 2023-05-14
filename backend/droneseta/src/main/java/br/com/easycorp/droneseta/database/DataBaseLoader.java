package br.com.easycorp.droneseta.database;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import br.com.easycorp.droneseta.model.Camiseta;
import br.com.easycorp.droneseta.model.Role;
import br.com.easycorp.droneseta.model.Usuario;
import br.com.easycorp.droneseta.repositories.CamisetaRepository;
import br.com.easycorp.droneseta.repositories.UsuarioRepository;

@Configuration
public class DataBaseLoader {
    private static final Logger log = LoggerFactory.getLogger(DataBaseLoader.class);

    @Bean
    CommandLineRunner initDataBase(CamisetaRepository repository) {
        return args -> {
            //log.info("Pre-carregando " + repository.save(new Camiseta("Linkin park baby look", "test", 25.50)));

        };
    }

    @Bean
    CommandLineRunner initDataBaseUser(UsuarioRepository repository) throws ParseException{
        String dataString = "14/05/1992";
        SimpleDateFormat formato = new SimpleDateFormat("dd/MM/yyyy");
        Date data = formato.parse(dataString);
        return args -> {
            //log.info("Pre-carregando " + repository.save(new Usuario(Role.ADMIN, data, "admin@admin.com", "2322-3232-2344-4232","admin", "abc123" )));
            
        };
    }

}
