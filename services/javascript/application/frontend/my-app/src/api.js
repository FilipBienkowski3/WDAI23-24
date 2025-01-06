import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3001', // Adres backendu
});

// GET wszystkie osoby
export const getPersons = () => API.get('/person');

// PUT aktualizacja osoby
export const updatePerson = (id, personData) =>
  API.put(`/person/update/${id}`, personData); // Przekazujemy dane w body

// POST tworzenie osoby
export const addPerson = (person) => API.post('/person/create', person);

// DELETE usuwanie osoby
export const deletePerson = (id) => API.delete(`/person/delete/${id}`);

export default API;
//npm start na forncie
//PORT=3001 Nna backendzie get dziala listowanie, reszta nie