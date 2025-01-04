//plik konfiguracji do backendu
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8080/', // Adres Twojego backendu
});

export const getPersons = () => API.get('/person');
export const addPerson = (person) => API.post('/person', person);

export default API;
