import React, { useState, useEffect } from 'react';
import { getPersons, addPerson } from '../api';

function Home() {
  const [persons, setPersons] = useState([]);
  const [newPerson, setNewPerson] = useState('');

  // Pobieranie listy osób
  useEffect(() => {
    getPersons().then((response) => {
      setPersons(response.data);
    });
  }, []);

  // Dodawanie nowej osoby
  const handleAddPerson = () => {
    const person = { name: newPerson };
    addPerson(person).then(() => {
      setPersons([...persons, person]);
      setNewPerson('');
    });
  };

  return (
    <div>
      <h1>Person List</h1>
      <ul>
        {persons.map((person, index) => (
          <li key={index}>{person.name}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newPerson}
        onChange={(e) => setNewPerson(e.target.value)}
        placeholder="Add a person"
      />
      <button onClick={handleAddPerson}>Add Person</button>
    </div>
  );
}

export default Home;
