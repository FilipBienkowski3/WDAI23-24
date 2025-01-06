var express = require('express');
var router = express.Router();
var models = require('../db');

// GET: Zwrócenie wszystkich osóbhttp://localhost:3000/person
router.get('/', function(req, res, next) {
  models.Person.find({})
    .then(persons => res.json(persons))
    .catch(error => res.status(500).json({ error: error.message }));
});

// GET: Zwrócenie jednej osoby po id
router.get('/:id', function(req, res, next) {
  models.Person.findOne({ id: req.params.id })
    .then(person => {
      if (!person) {
        return res.status(404).json({ message: "Person not found" });
      }
      res.json({ person });
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

// POST: Tworzenie nowej osobyhttp://localhost:3000/person
router.post('/', function(req, res, next) {
  const { id, name, surname, job } = req.body;

  const person = new models.Person({
    id: id, 
    name: name,
    surname: surname,
    job: job
  });

  person.save()
    .then(savedPerson => {
      res.status(201).json({ person: savedPerson });
    })
    .catch(error => {
      res.status(400).json({ error: error.message });
    });
});

// PUT: Aktualizacja osoby po id http://localhost:3000/person/1 i dane body raw json
router.put('/:id', function(req, res, next) {
  models.Person.findOne({ id: req.params.id })
    .then(person => {
      if (!person) {
        return res.status(404).json({ message: "Person not found" });
      }
      person.update(req.body)
        .then(updatedPerson => {
          res.json({ person: updatedPerson });
        });
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

// DELETE: Usuwanie osoby po id
router.delete('/:id', function(req, res, next) {
  models.Person.deleteOne({ id: req.params.id })
    .then(result => {
      if (result.deletedCount === 0) {
        return res.status(404).json({ message: "Person not found" });
      }
      res.status(200).json({ message: "Person deleted successfully" });
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

module.exports = router;
