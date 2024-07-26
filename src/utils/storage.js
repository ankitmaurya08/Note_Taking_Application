export const getNotesFromStorage = () => {
    const notes = localStorage.getItem('notes');
    return notes ? JSON.parse(notes) : [];
  };
  
  export const saveNotesToStorage = notes => {
    localStorage.setItem('notes', JSON.stringify(notes));
  };
  