import React, { useState } from 'react';
import { deletePerson } from '../api';

function DeletePerson() {
  const [deleteId, setDeleteId] = useState('');

  const handleDeletePerson = () => {
    deletePerson(deleteId)
      .then(() => {
        alert('Person deleted successfully');
        setDeleteId('');
      })
      .catch((error) => {
        console.error('Error deleting person:', error);
        alert('Error deleting person');
      });
  };

  return (
    <div>
      <h2>Delete Person</h2>
      <input
        type="text"
        value={deleteId}
        placeholder="Person ID"
        onChange={(e) => setDeleteId(e.target.value)}
      />
      <button onClick={handleDeletePerson}>Delete</button>
    </div>
  );
}

export default DeletePerson;
