// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PersonList from "./PersonList"; // Komponent z listą osób
import CreatePerson from "./CreatePerson"; // Komponent do tworzenia osoby
import UpdatePerson from "./UpdatePerson"; // Komponent do edytowania osoby

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/create">Create Person</a>
            </li>
            <li>
              <a href="/update/1">Update Person (ID=1)</a> {/* Przykład */}
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<PersonList />} />
          <Route path="/create" element={<CreatePerson />} />
          <Route path="/update/:id" element={<UpdatePerson />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
