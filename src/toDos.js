const set = (key, value) => localStorage.setItem(key, JSON.stringify(value));
const get = key => localStorage.getItem(key);

const project = projectTitle => {
  const projectName = projectTitle;
  let notePos = 0;
  const notes = [];
  const getNotes = () => notes;
  const addNote = (title, description, dueDate, priority) => {
    const newNote = note(title, description, dueDate, priority, notePos++);
    notes.push(newNote);
    set(projectName, notes);
  };

  return { projectName, addNote, getNotes };
};

const note = (title, description, dueDate, priority, position) => ({
  title,
  description,
  dueDate,
  priority,
  position
});

export default project;
