import React, { useState, useEffect } from 'react';
import { getPersons } from '../api';

function PersonList() {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    fetchPersons();
  }, []);

  const fetchPersons = () => {
    getPersons().then((response) => {
      setPersons(response.data);
    });
  };

  return (
    <div>
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

export default PersonList;
