var express = require('express');
var router = express.Router();
var models = require('../db');

// GET: Pobierz wszystkie osoby
//http://localhost:3000/person
router.get('/', async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE");
  
  try {
    const persons = await models.Person.find({});
    res.json(persons);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// POST: Dodaj nową osobę
//http://localhost:3000/person/create i w post raw json podaje 4 zmienne
router.post('/create', async (req, res) => {
  try {
    const { id, name, surname, job } = req.body; // Pobierz dane z JSON-a
    const newPerson = new models.Person({ id, name, surname, job });
    const savedPerson = await newPerson.save();
    res.status(201).json(savedPerson);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// PUT: Zaktualizuj osobę po ID
//http://localhost:3000/person/update/1 w ciele raw json name surname i job
router.put('/update/:id', async (req, res) => {
    try {
      // Zmienne pobieramy z ciała żądania
      const { name, surname, job } = req.body;
  
      // Aktualizujemy dane osoby po id
      const updatedPerson = await models.Person.findOneAndUpdate(
        { id: req.params.id },  // szukamy osoby po id z URL
        { name, surname, job }, // dane do zaktualizowania
        { new: true }            // zwróć zaktualizowany dokument
      );
  
      if (!updatedPerson) {
        return res.status(404).json({ message: 'Person not found' });
      }
  
      res.json(updatedPerson); // Zwracamy zaktualizowaną osobę
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  

// DELETE: Usuń osobę po ID
//http://localhost:3000/person/delete/23
router.delete('/delete/:id', async (req, res) => {
  try {
    const result = await models.Person.deleteOne({ id: req.params.id });
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'Person not found' });
    }
    res.status(200).json({ message: 'Person deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
