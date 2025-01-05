// //plik konfiguracji do backendu
// import axios from 'axios';

// const API = axios.create({
//   baseURL: 'http://localhost:8080', // Adres Twojego backendu
// });

// export const getPersons = () => API.get('/person');

// export default API;
const API = axios.create({
    baseURL: 'http://localhost:5000', // Zmieniony port z 8080 na 5000
  });
