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

	//dodanie do "bazy" do reposytorium raczej
	@Bean
	public CommandLineRunner demo(PersonsRepository repository) {
		return (args) -> {
			// save a few persons
			repository.save(new Person("John", "Doe", "IT"));

			// fetch all persons
			repository.findAll().forEach(person -> {
				System.out.println(person.toString());
			});
		};
	}
}
