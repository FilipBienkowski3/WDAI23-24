import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './styles.css';
import Home from './components/Home'; // Importuj Home.js
import AddPerson from './components/AddPerson';
import UpdatePerson from './components/UpdatePerson';
import DeletePerson from './components/DeletePerson';

function App() {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/add">Add Person</Link></li>
            <li><Link to="/update">Update Person</Link></li>
            <li><Link to="/delete">Delete Person</Link></li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Ustaw Home jako stronę główną */}
          <Route path="/add" element={<AddPerson />} />
          <Route path="/update" element={<UpdatePerson />} />
          <Route path="/delete" element={<DeletePerson />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
// odpalenie w docerze oracle db, odapanie java recznie demo w idle, mozna po