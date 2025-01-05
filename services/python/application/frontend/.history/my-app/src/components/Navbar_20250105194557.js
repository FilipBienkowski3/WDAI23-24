import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{ padding: '1rem', background: '#282c34', color: 'white' }}>
            <Link to="/delete" style={{ margin: '0 1rem', color: 'white' }}>Delete</Link>
            <Link to="/update" style={{ margin: '0 1rem', color: 'white' }}>Update</Link>
            <Link to="/list" style={{ margin: '0 1rem', color: 'white' }}>List</Link>
            <Link to="/create" style={{ margin: '0 1rem', color: 'white' }}>Create</Link>
        </nav>
    );
};

export default Navbar;
