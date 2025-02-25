// module.exports = router;
var express = require('express');
var router = express.Router();
var models = require('../db');
// // GET: Pobierz wszystkie osoby
// //http://localhost:3000/person
// GET: Pobierz wszystkie osoby
router.get('/', async (req, res) => {
  try {
    const persons = await models.Person.find({});
    res.json(persons);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// // POST: Dodaj nową osobę
// //http://localhost:3000/person/create i w body raw json podaje 4 zmienne
// // {
// //   "id": 1,
// //   "name": "Jan",
// //   "surname": "Kowalski",
// //   "job": "Programista"
// // }
// POST: Dodaj nową osobę
router.post('/create', async (req, res) => {
  try {
    const { id, name, surname, job } = req.body;
    const newPerson = new models.Person({ id, name, surname, job });
    const savedPerson = await newPerson.save();
    res.status(201).json(savedPerson);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
// // PUT: Zaktualizuj osobę po ID
// //http://localhost:3000/person/update/1 w ciele raw json name surname i job

// //{
// //   "job": "Senior Developer"
// // }
// PUT: Zaktualizuj osobę po ID
router.put('/update/:id', async (req, res) => {
  try {
    const { name, surname, job } = req.body;
    const updatedPerson = await models.Person.findOneAndUpdate(
      { id: req.params.id },
      { name, surname, job },
      { new: true }
    );

    if (!updatedPerson) {
      return res.status(404).json({ message: 'Person not found' });
    }

    res.json(updatedPerson);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
// // DELETE: Usuń osobę po ID
// //http://localhost:3000/person/delete/23
// DELETE: Usuń osobę po ID
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

//npm start na frontcie i  backendzie