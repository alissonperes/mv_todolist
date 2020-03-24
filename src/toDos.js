const set = (key, value) => localStorage.setItem(key, JSON.stringify(value));
const get = key => localStorage.getItem(key);
const remove = key => localStorage.removeItem(key);

const project = projectTitle => {
  const title = projectTitle;
  const notes = [];
  const getNotes = () => notes;
  const addNote = (nTitle, description, dueDate, priority) => {
    const newNote = note(nTitle, description, dueDate, priority);
    notes.push(newNote);
    set(title, notes);
  };

  return { title, addNote, getNotes };
};

const note = (nTitle, description, dueDate, priority) => {
  return { nTitle, description, dueDate, priority };
};

export default project;
