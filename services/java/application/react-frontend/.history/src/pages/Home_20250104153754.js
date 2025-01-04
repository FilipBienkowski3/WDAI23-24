import React, { useState } from 'react';
import { getPersons } from '../api';

function Home() {
  const [persons, setPersons] = useState([]);

  // Pobieranie listy osób po kliknięciu przycisku
  const handleFetchPersons = () => {
    getPersons()
      .then((response) => {
        setPersons(response.data);
      })
      .catch((error) => {
        console.error('Error fetching persons:', error);
      });
  };

  return (
    <div>
      <h1>Person List</h1>
      <button onClick={handleFetchPersons}>Fetch Persons</button>
      <ul>
        {persons.map((person) => (
          <li key={person.id}>
            {person.name} {person.surname}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
