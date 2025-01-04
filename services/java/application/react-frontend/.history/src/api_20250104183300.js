// //plik konfiguracji do backendu
// import axios from 'axios';

// const API = axios.create({
//   baseURL: 'http://localhost:8080', // Adres Twojego backendu
// });

// export const getPersons = () => API.get('/person');

// export default API;
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8080', // Adres Twojego backendu
});

export const getPersons = () => API.get('/person');
export const updatePerson = (id, name, surname, job) => 
  API.put(`/update/${id}?name=${name}&surname=${surname}&job=${job}`);
export const addPerson = (person) => API.post('/create', null, { params: person });export const deletePerson = (id) => API.delete(`/delete/${id}`);

export default API;
