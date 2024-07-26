import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateEditPage from './pages/CreateEditPage';
import { getNotesFromStorage, saveNotesToStorage } from './utils/storage';
import './components/styles/App.css';

const App = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    setNotes(getNotesFromStorage());
  }, []);

  useEffect(() => {
    saveNotesToStorage(notes);
  }, [notes]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage notes={notes} setNotes={setNotes} />} />
        <Route path="/edit/:id" element={<CreateEditPage notes={notes} setNotes={setNotes} />} />
        <Route path="/create" element={<CreateEditPage notes={notes} setNotes={setNotes} />} />
      </Routes>
    </Router>
  );
};

export default App;
