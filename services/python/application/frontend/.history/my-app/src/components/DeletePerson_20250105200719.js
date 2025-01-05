import React, { useState } from "react";

const DeletePerson = () => {
  const [id, setId] = useState("");

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/delete/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      console.log("Deleted:", data);
      alert("Person deleted successfully!");
    } catch (error) {
      console.error("Error deleting person:", error);
    }
  };

  return (
    <form onSubmit={handleDelete}>
      <input placeholder="ID" onChange={(e) => setId(e.target.value)} />
      <button type="submit">Delete</button>
    </form>
  );
};

export default DeletePerson;
