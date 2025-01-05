import React, { useState } from 'react';
import { updatePerson } from '../api';

function UpdatePerson() {
  const [updateId, setUpdateId] = useState('');
  const [updatedPersonData, setUpdatedPersonData] = useState({ name: '', surname: '', job: '' });

  const handleUpdatePerson = () => {
    updatePerson(updateId, updatedPersonData.name, updatedPersonData.surname, updatedPersonData.job)
      .then(response => {
        console.log('Person updated:', response.data);
      })
      .catch(error => {
        console.error('There was an error updating the person:', error);
      });
  };

  return (
    <div>
      <h2>Update Person</h2>
      <input
        type="text"
        value={updateId}
        placeholder="Person ID"
        onChange={(e) => setUpdateId(e.target.value)}
      />
      <input
        type="text"
        value={updatedPersonData.name}
        placeholder="New Name"
        onChange={(e) => setUpdatedPersonData({ ...updatedPersonData, name: e.target.value })}
      />
      <input
        type="text"
        value={updatedPersonData.surname}
        placeholder="New Surname"
        onChange={(e) => setUpdatedPersonData({ ...updatedPersonData, surname: e.target.value })}
      />
      <input
        type="text"
        value={updatedPersonData.job}
        placeholder="New Job"
        onChange={(e) => setUpdatedPersonData({ ...updatedPersonData, job: e.target.value })}
      />
      <button onClick={handleUpdatePerson}>Update</button>
    </div>
  );
}

export default UpdatePerson;
