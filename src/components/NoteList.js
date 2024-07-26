import React from 'react';
import NoteItem from './NoteItem';
import { Link } from 'react-router-dom';
import './styles/NoteList.css';

const NoteList = ({ notes, setNotes }) => {
  const deleteNote = id => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div className="note-list">
      <Link to="/create">
        <button className="add-note-button">Add Note</button>
      </Link>
      {notes.map(note => (
        <NoteItem key={note.id} note={note} deleteNote={deleteNote} />
      ))}
    </div>
  );
};

export default NoteList;
