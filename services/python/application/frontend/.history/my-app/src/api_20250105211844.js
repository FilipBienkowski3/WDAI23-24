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

// Zmiana w funkcji addPerson
export const addPerson = (person) => {
  const formData = new FormData();
  formData.append('name', person.name);
  formData.append('surname', person.surname);
  formData.append('job', person.job);

  return API.post('/create', formData);
};

// Zmiana w funkcji updatePerson
export const updatePerson = (id, name, surname, job) => {
  const formData = new FormData();
  formData.append('name', name);
  formData.append('surname', surname);
  formData.append('job', job);

  return API.put(`/update/${id}`, formData);
};

export const getPersons = () => API.get('/person');
export const deletePerson = (id) => API.delete(`/delete/${id}`);

export default API;


//w postma