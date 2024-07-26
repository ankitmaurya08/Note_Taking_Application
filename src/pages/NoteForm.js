import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './styles/NoteForm.css';

const NoteForm = ({ notes, setNotes }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState({ title: '', content: '', timestamp: '' });

  useEffect(() => {
    if (id) {
      const existingNote = notes.find(note => note.id === id);
      if (existingNote) {
        setNote(existingNote);
      }
    }
  }, [id, notes]);

  const handleChange = e => {
    const { name, value } = e.target;
    setNote(prevNote => ({ ...prevNote, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (id) {
      setNotes(
        notes.map(noteItem => (noteItem.id === id ? note : noteItem))
      );
    } else {
      setNotes([...notes, { ...note, id: Date.now().toString(), timestamp: new Date().toLocaleString() }]);
    }
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <input
        type="text"
        name="title"
        value={note.title}
        onChange={handleChange}
        placeholder="Title"
        required
      />
      <textarea
        name="content"
        value={note.content}
        onChange={handleChange}
        placeholder="Content"
        required
      ></textarea>
      <button type="submit">{id ? 'Update' : 'Create'} Note</button>
    </form>
  );
};

export default NoteForm;
