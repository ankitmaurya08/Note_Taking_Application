import React from 'react';
import { Link } from 'react-router-dom';
import './styles/NoteItem.css';

const NoteItem = ({ note, deleteNote }) => {
  return (
    <div className="note-item">
      <h2>{note.title}</h2>
      <p>{note.content.substring(0, 100)}...</p>
      <p>{note.timestamp}</p>
      <Link to={`/edit/${note.id}`}>
        <button className="edit-button">Edit</button>
      </Link>
      <button className="delete-button" onClick={() => deleteNote(note.id)}>Delete</button>
    </div>
  );
};

export default NoteItem;
