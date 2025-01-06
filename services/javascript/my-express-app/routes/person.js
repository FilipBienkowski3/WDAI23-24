

var express = require('express');
var router = express.Router();
var models = require("../db")

router.get('/', function(req, res, next) {
    // return all persons
    models.PersonSchema.findAll({}).then(person => res.json({
        person
    }))
});

router.get('/:id', function(req, res, next) {
    // return a single person by id
    models.PersonSchema.findByPk(req.params.id).then(person => res.json({
        person
    }))
});
// na postmanie post, body, raw i np {
//     "name": "Sir",
//     "surname": "Lancelot",
//     "job": "Knight"
// ]
router.post('/', function (req, res, next) {
    // Tworzenie nowej osoby
    models.PersonSchema.create(req.body)
        .then(person => {
            res.status(201).json({
                person
            }); // Zwraca cały obiekt
        })
        .catch(error => {
            res.status(400).json({
                error: error.message
            }); // Zwraca błąd w przypadku problemu
        });
});
//tak samo jak post tylko ze put z person/2 i body raw json i wpisuje dane
router.put('/:id', function(req, res, next) {
    // update a single person by id
    models.PersonSchema.findByPk(req.params.id).then(person => {
        person.update(req.body).then(person => res.json({
            person
        }));
    })
});
//delete i http://localhost:3000/person/1
router.delete('/:id', function(req, res, next) {
    // delete a single person by id
    models.PersonSchema.destroy({
        where: {
            id: req.params.id
        }
    }).then(person => res.json({
        person
    }))
});

module.exports = router;