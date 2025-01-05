import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
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

        {/* Switch i trasy */}
        <Switch>
          <Route path="/" exact component={Home} /> {/* Ustaw Home jako stronę główną */}
          <Route path="/add" component={AddPerson} />
          <Route path="/update" component={UpdatePerson} />
          <Route path="/delete" component={DeletePerson} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
