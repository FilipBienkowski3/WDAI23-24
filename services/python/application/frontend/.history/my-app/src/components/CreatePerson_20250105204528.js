import React, { useState } from 'react';
import { addPerson } from '../api';

function Person() {
  const [newPerson, setNewPerson] = useState({ name: '', surname: '', job: '' });

  const handleAddPerson = () => {
    addPerson(newPerson).then(() => {
      setNewPerson({ name: '', surname: '', job: '' });
    });
  };

  return (
    <div>
      <h2>Add Person</h2>
      <input
        type="text"
        value={newPerson.name}
        placeholder="Name"
        onChange={(e) => setNewPerson({ ...newPerson, name: e.target.value })}
      />
      <input
        type="text"
        value={newPerson.surname}
        placeholder="Surname"
        onChange={(e) => setNewPerson({ ...newPerson, surname: e.target.value })}
      />
      <input
        type="text"
        value={newPerson.job}
        placeholder="Job"
        onChange={(e) => setNewPerson({ ...newPerson, job: e.target.value })}
      />
      <button onClick={handleAddPerson}>Add</button>
    </div>
  );
}

export default AddPerson;
