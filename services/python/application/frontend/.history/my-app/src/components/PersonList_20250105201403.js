import React, { useState, useEffect } from "react";
import axios from "axios";

function PersonList() {
  const [persons, setPersons] = useState([]);

  // Pobierz dane o wszystkich osobach
  useEffect(() => {
    axios
      .get("http://localhost:5000/person")  // URL backendu
      .then((response) => {
        setPersons(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data:", error);
      });
  }, []);

  // Funkcja usuwania osoby
  const deletePerson = (id) => {
    axios
      .delete(`http://localhost:5000/delete/${id}`)
      .then(() => {
        setPersons(persons.filter((person) => person.id !== id));
      })
      .catch((error) => {
        console.error("There was an error deleting the person:", error);
      });
  };

  return (
    <div>
      <h2>List of Persons</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.id}>
            {person.name} {person.surname} ({person.job})
            <button onClick={() => deletePerson(person.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PersonList;
