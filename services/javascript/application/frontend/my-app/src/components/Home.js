import React, { useState, useEffect } from 'react';
import { getPersons } from '../api';

function Home() {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    fetchPersons();
  }, []);

  const fetchPersons = () => {
    console.log("Fetching persons...");
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
      <h1>Person Management</h1>

      <h2>Persons List</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.id}>
            {person.name} {person.surname} - {person.job}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
