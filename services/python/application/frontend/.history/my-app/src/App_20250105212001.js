import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './styles.css';
import Home from './components/Home'; // Importuj Home.js
import CreatePerson from './components/CreatePerson';
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
            <li><Link to="/create">Create Person</Link></li>
            <li><Link to="/update">Update Person</Link></li>
            <li><Link to="/delete">Delete Person</Link></li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Ustaw Home jako stronę główną */}
          <Route path="/create" element={<CreatePerson />} />
          <Route path="/update" element={<UpdatePerson />} />
          <Route path="/delete" element={<DeletePerson />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
//zeby działało
//wejscie do backend