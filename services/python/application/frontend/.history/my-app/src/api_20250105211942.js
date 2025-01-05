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


//w postmanie dla post i put wchodze w body form data i tam modyfikuje dlatego add i update rozni sie wzgledem aplikacji z springbootem znaczaco, nie moge wejsc do data gripa tak to działa
//opis z 
// Wydaje się, że masz problem z metodą POST i PUT, ponieważ nie wysyłasz danych we właściwy sposób w zapytaniu do backendu Flask. Jak zauważyłeś, w Postmanie musisz przesyłać dane w formacie form-data, co odpowiada przesyłaniu danych w ciele zapytania w formacie application/x-www-form-urlencoded. W przypadku React i axios trzeba to zrobić nieco inaczej.

// Problem:
// Dla POST (addPerson) i PUT (updatePerson) w Twoim backendzie dane są odbierane przez Flask jako request.form.get(), co oznacza, że dane muszą być wysyłane w formacie form-data. Natomiast w Twoim kodzie React, wysyłasz dane w formie JSON, a Flask oczekuje danych przesyłanych w formie form-data.
// Rozwiązanie:
// Aby rozwiązać ten problem, możesz wysyłać dane w formie form-data w zapytaniu HTTP, tak jak robi to Postman, a axios ma funkcjonalność, która pozwala na wysyłanie danych w tym formacie.

// Musisz zmienić sposób wysyłania zapytań w React i użyć obiektu FormData w przypadku wysyłania danych w formacie form-data.

// Poprawiony kod:
// 1. Zmiana w addPerson i updatePerson
// Zamiast wysyłać obiekt jako JSON w axios.post() lub axios.put(), musisz stworzyć obiekt FormData, który odpowiednio obsługuje dane w formacie form-data.