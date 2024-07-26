import React, { useState } from 'react';
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';
import '../components/styles/HomePage.css';

const HomePage = ({ notes, setNotes }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const notesPerPage = 10;

  const filteredNotes = notes.filter(note =>
    note.title.includes(searchQuery) || note.content.includes(searchQuery)
  );

  const paginatedNotes = filteredNotes.slice(
    (currentPage - 1) * notesPerPage,
    currentPage * notesPerPage
  );

  return (
    <div>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <NoteList notes={paginatedNotes} setNotes={setNotes} />
      <Pagination
        totalNotes={filteredNotes.length}
        notesPerPage={notesPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default HomePage;
