import React, { useState, useEffect } from "react";
import axios from "axios";

function UpdatePerson({ match }) {
  const [person, setPerson] = useState({
    name: "",
    surname: "",
    job: ""
  });

  // Pobierz dane osoby do edycji
  useEffect(() => {
    const id = match.params.id;
    axios
      .get(`http://localhost:5000/person/${id}`)
      .then((response) => {
        setPerson(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the person:", error);
      });
  }, [match.params.id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = match.params.id;

    axios
      .put(`http://localhost:5000/update/${id}`, person)
      .then((response) => {
        alert("Person updated!");
      })
      .catch((error) => {
        console.error("There was an error updating the person:", error);
      });
  };

  return (
    <div>
      <h2>Update Person</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={person.name}
          onChange={(e) => setPerson({ ...person, name: e.target.value })}
        />
        <input
          type="text"
          value={person.surname}
          onChange={(e) => setPerson({ ...person, surname: e.target.value })}
        />
        <input
          type="text"
          value={person.job}
          onChange={(e) => setPerson({ ...person, job: e.target.value })}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UpdatePerson;
