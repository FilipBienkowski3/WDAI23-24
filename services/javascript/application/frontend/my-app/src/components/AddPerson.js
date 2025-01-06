import React, { useState } from 'react';
import { addPerson } from '../api';

function AddPerson() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [job, setJob] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const person = { id, name, surname, job };
    addPerson(person)
      .then((response) => {
        console.log('Person added:', response.data);
      })
      .catch((error) => {
        console.error('Error adding person:', error);
      });
  };

  return (
    <div>
      <h2>Add Person</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} />
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Surname" value={surname} onChange={(e) => setSurname(e.target.value)} />
        <input type="text" placeholder="Job" value={job} onChange={(e) => setJob(e.target.value)} />
        <button type="submit">Add Person</button>
      </form>
    </div>
  );
}

export default AddPerson;
