import React, { useEffect, useState } from "react";

const ListPersons = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    const fetchPersons = async () => {
      try {
        const response = await fetch("http://localhost:5000/person");
        const data = await response.json();
        setPersons(data);
      } catch (error) {
        console.error("Error fetching persons:", error);
      }
    };

    fetchPersons();
  }, []);

  return (
    <div>
      <h2>Persons</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.id}>
            {person.name} {person.surname} - {person.job}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListPersons;
