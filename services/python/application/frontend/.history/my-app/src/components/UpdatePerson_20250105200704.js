import React, { useState } from "react";

const UpdatePerson = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [job, setJob] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      if (name) formData.append("name", name);
      if (surname) formData.append("surname", surname);
      if (job) formData.append("job", job);

      const response = await fetch(`http://localhost:5000/update/${id}`, {
        method: "PUT",
        body: formData,
      });
      const data = await response.json();
      console.log("Updated:", data);
      alert("Person updated successfully!");
    } catch (error) {
      console.error("Error updating person:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="ID" onChange={(e) => setId(e.target.value)} />
      <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input placeholder="Surname" onChange={(e) => setSurname(e.target.value)} />
      <input placeholder="Job" onChange={(e) => setJob(e.target.value)} />
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdatePerson;
