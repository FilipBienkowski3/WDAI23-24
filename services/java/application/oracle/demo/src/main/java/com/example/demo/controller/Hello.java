package com.example.demo.controller;

import com.example.demo.dao.Person;
import com.example.demo.service.PersonServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Map;
@RestController
public class Hello{
//    http://localhost:8080/hello
//    http://localhost:8080/hello?name=Jan
//    @GetMapping("/hello")
//    public String hello(@RequestParam(name = "name", defaultValue = "World") String name) {
//        return "Cześć " + name;
//    }
@Autowired
private PersonServiceImpl personService;
    //zamiana stringa na json
@GetMapping("/hello")
public ResponseEntity<Map<String,String>> hello(@RequestParam(value = "name", defaultValue = "World") String name){
    Map<String,String> json= Map.of("message", "Hello " + name + "!");
    return new ResponseEntity<>(json, HttpStatus.OK);
}
    @GetMapping("/person")
    public List<Person> getPersons() {
        return personService.getPersons();
    }

    @GetMapping("/person/id/{id}")
    public Person getPersonById(@PathVariable(value = "id") int id) {
        return personService.getPersonById(id);
    }

    @GetMapping("/person/surname/{surname}")
    public Person getPersonBySurname(@PathVariable(value = "surname") String surname) {
        return personService.getPersonBySurname(surname);
    }
//w postmanie wybieram post key name Jan itdwszytskie parametry
    @PostMapping("/create")
    public Person createPerson(@RequestParam(value = "name") String name,
                               @RequestParam(value = "surname") String surname,
                               @RequestParam(value = "job") String job) {

        return personService.create(new Person(name, surname, job));
    }
//w postmanie na delete http://localhost:8080/delete/1
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Map<String,String>> deletePerson(@PathVariable(value = "id") int id) {
        Person person = personService.getPersonById(id);
        if(person == null){
            Map<String,String> json= Map.of("message", "Person with id " + id + " not found!");
            return new ResponseEntity<>(json, HttpStatus.NOT_FOUND);
        }
        personService.delete(person);
        Map<String,String> json= Map.of("message", "Person with id " + id + " deleted!");
        return new ResponseEntity<>(json, HttpStatus.OK);
    }
//w postamnie wybieram put, http://localhost:8080/update/1 i wypisuje nowe dane tej osoby name - asa surname - xd itd
    @PutMapping("/update/{id}")
    public Person updatePerson(@PathVariable(value = "id") int id,
                               @RequestParam(value = "name") String name,
                               @RequestParam(value = "surname") String surname,
                               @RequestParam(value = "job") String job) {
        Person person = personService.getPersonById(id);
        if (person != null){
            person.setName(name);
            person.setSurname(surname);
            person.setJob(job);
            return personService.create(person);
        }
        return null;
    }
}