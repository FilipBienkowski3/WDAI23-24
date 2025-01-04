package com.example.demo;
//terwz to działa tak ze jak wyjdziemy to sie ksuje, baze trzeva podłaczyc i front
import com.example.demo.dao.Person;
import com.example.demo.repository.PersonsRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class DemoApplication {
	//włączenie serwera
	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

}
