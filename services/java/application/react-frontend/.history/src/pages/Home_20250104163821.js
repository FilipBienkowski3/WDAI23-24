// import React, { useState } from 'react';
// import { getPersons } from '../api';

// function Home() {
//   const [persons, setPersons] = useState([]);

//   // Pobieranie listy osób po kliknięciu przycisku
//   const handleFetchPersons = () => {
//     getPersons()
//       .then((response) => {
//         setPersons(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching persons:', error);
//       });
//   };

//   return (
//     <div>
//       <h1>Person List</h1>
//       <button onClick={handleFetchPersons}>Fetch Persons</button>
//       <ul>
//         {persons.map((person) => (
//           <li key={person.id}>
//             {person.name} {person.surname}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Home;
import React, { useState, useEffect } from 'react';
import { getPersons, addPerson, updatePerson, deletePerson } from '../api';

function Home() {
  const [persons, setPersons] = useState([]);
  const [newPerson, setNewPerson] = useState({ name: '', surname: '', job: '' });
  const [updateId, setUpdateId] = useState('');
  const [updatePerson, setUpdatePerson] = useState({ name: '', surname: '', job: '' });
  const [deleteId, setDeleteId] = useState('');

  // Pobieranie listy osób
  useEffect(() => {
    fetchPersons();
  }, []);

  const fetchPersons = () => {
    getPersons().then((response) => {
      setPersons(response.data);
    });
  };

  // Dodawanie nowej osoby
  const handleAddPerson = () => {
    addPerson(newPerson).then(() => {
      fetchPersons();
      setNewPerson({ name: '', surname: '', job: '' });
    });
  };

  // Aktualizacja osoby
  const handleUpdatePerson = () => {
    const updatedPerson = { name: updatePerson.name, surname: updatePerson.surname, job: updatePerson.job };
    
    updatePerson(updateId, updatedPerson).then((response) => {
      if (response.status === 200) {
        fetchPersons();
        setUpdateId('');
        setUpdatePerson({ name: '', surname: '', job: '' });
      } else {
        alert("Failed to update person");
      }
    }).catch(error => {
      console.error("Error updating person:", error);
      alert("Error updating person");
    });
  };

  // Usuwanie osoby
  const handleDeletePerson = () => {
    deletePerson(deleteId).then(() => {
      fetchPersons();
      setDeleteId('');
    });
  };

  return (
    <div>
      <h1>Person Management</h1>

      {/* Lista osób */}
      <h2>Persons List</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.id}>
            {person.name} {person.surname} - {person.job}
          </li>
        ))}
      </ul>

      {/* Dodawanie nowej osoby */}
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

      {/* Aktualizacja osoby */}
      <h2>Update Person</h2>
      <input
        type="text"
        value={updateId}
        placeholder="Person ID"
        onChange={(e) => setUpdateId(e.target.value)}
      />
      <input
        type="text"
        value={updatePerson.name}
        placeholder="New Name"
        onChange={(e) => setUpdatePerson({ ...updatePerson, name: e.target.value })}
      />
      <input
        type="text"
        value={updatePerson.surname}
        placeholder="New Surname"
        onChange={(e) => setUpdatePerson({ ...updatePerson, surname: e.target.value })}
      />
      <input
        type="text"
        value={updatePerson.job}
        placeholder="New Job"
        onChange={(e) => setUpdatePerson({ ...updatePerson, job: e.target.value })}
      />
      <button onClick={handleUpdatePerson}>Update</button>

      {/* Usuwanie osoby */}
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

export default Home;
