// src/CreatePerson.js
import React, { useState } from "react";
import axios from "axios";

function CreatePerson() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [job, setJob] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:5000/create", { name, surname, job })
      .then((response) => {
        alert("Person created!");
        setName("");
        setSurname("");
        setJob("");
      })
      .catch((error) => {
        console.error("There was an error creating the person:", error);
      });
  };

  return (
    <div>
      <h2>Create Person</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <input
          type="text"
          placeholder="Job"
          value={job}
          onChange={(e) => setJob(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreatePerson;
