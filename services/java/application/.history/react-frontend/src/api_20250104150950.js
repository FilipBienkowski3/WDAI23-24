//plik konfiguracji do backendu
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8080/api', // Adres Twojego backendu
});

export const getPersons = () => API.get('/persons');
export const addPerson = (person) => API.post('/persons', person);

export default API;
