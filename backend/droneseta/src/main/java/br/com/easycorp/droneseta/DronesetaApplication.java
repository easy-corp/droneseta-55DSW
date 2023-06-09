package br.com.easycorp.droneseta;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@EnableScheduling
@SpringBootApplication
public class DronesetaApplication {

	public static final int TEMPO_ENTREGA = 60;

	public static void main(String[] args) {
		SpringApplication.run(DronesetaApplication.class, args);
	}

	//Para configurar nosso acesso via CORS
	@Bean
	public WebMvcConfigurer configCORS( ) {
		return new WebMvcConfigurer() {
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**")
						.allowedMethods("*")
						.allowedOrigins("http://localhost:3000");
			}
		};
	}

}
