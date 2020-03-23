const project = (projectTitle) => {
  const title = projectTitle;
  const notes = [];
  const getNotes = () => notes;
  const addNote = (nTitle, description, dueDate, priority) => {
    const newNote = note(nTitle, description, dueDate, priority);
    notes.push(newNote);
  };

  return { title, addNote, getNotes };
};

const note = (nTitle, description, dueDate, priority) => {

  return { nTitle, description, dueDate, priority };
};

export default project;
