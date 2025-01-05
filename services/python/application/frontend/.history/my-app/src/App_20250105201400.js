import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CreatePerson from "./components/CreatePerson";
import ListPersons from "./components/PersonList";
import UpdatePerson from "./components/UpdatePerson";
import DeletePerson from "./components/DeletePerson";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Welcome to the Person Manager</h1>} />
        <Route path="/create" element={<CreatePerson />} />
        <Route path="/list" element={<ListPersons />} />
        <Route path="/update" element={<UpdatePerson />} />
        <Route path="/delete" element={<DeletePerson />} />
      </Routes>
    </Router>
  );
};

export default App;
