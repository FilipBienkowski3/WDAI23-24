import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PersonList from "./PersonList";
import UpdatePerson from "./UpdatePerson";
import CreatePerson from "./CreatePerson"; // Jeśli masz komponent do tworzenia

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
              <a href="/update/:id">Update Person</a>
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
