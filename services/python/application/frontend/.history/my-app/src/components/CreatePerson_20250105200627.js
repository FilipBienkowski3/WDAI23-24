import React, { useState } from "react";

const CreatePerson = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [job, setJob] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/create", {
        method: "POST",
        body: new FormData(e.target),
      });
      const data = await response.json();
      console.log("Created:", data);
      alert("Person created successfully!");
    } catch (error) {
      console.error("Error creating person:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input name="surname" placeholder="Surname" onChange={(e) => setSurname(e.target.value)} />
      <input name="job" placeholder="Job" onChange={(e) => setJob(e.target.value)} />
      <button type="submit">Create</button>
    </form>
  );
};

export default CreatePerson;
