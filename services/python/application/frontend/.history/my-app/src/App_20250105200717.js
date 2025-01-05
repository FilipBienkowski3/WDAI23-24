import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import DeletePage from './components/DeletePerson';
import UpdatePage from './components/UpdatePerson';
import ListPage from './components/ListPersons';
import CreatePage from './components/CreatePerson';

function App() {
    return (
        <Router>
            <Navbar />
            <div style={{ padding: '2rem' }}>
                <Routes>
                    <Route path="/delete" element={<DeletePage />} />
                    <Route path="/update" element={<UpdatePage />} />
                    <Route path="/list" element={<ListPage />} />
                    <Route path="/create" element={<CreatePage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
