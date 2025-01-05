// //plik konfiguracji do backendu
// import axios from 'axios';

// const API = axios.create({
//   baseURL: 'http://localhost:8080', // Adres Twojego backendu
// });

// export const getPersons = () => API.get('/person');

// export default API;
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000', // Poprawny port dla Flask
});


export const updatePerson = (id, name, surname, job) => 
  API.put(`/update/${id}`, { name, surname, job }); // Zmieniono query params na body
export const addPerson = (person) => API.post('/create', person);



export const deletePerson = (id) => API.delete(`/delete/${id}`);

export default API;
