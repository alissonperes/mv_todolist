const set = (key, value) => localStorage.setItem(key, JSON.stringify(value));
const get = (key) => JSON.parse(localStorage.getItem(key));
const getItems = (key, index) => {
  const values = JSON.parse(localStorage.getItem(key));
  return values.filter((x) => x.position === index);
};

const note = (title, description, dueDate, priority, position) => ({
  title,
  description,
  dueDate,
  priority,
  position,
});

const project = (projectTitle) => {
  const projectName = projectTitle;
  let notePos = 0;
  const notes = [];
  const getNotes = () => notes;
  const addNote = (title, description, dueDate, priority) => {
    const newNote = note(title, description, dueDate, priority, notePos);
    notePos += 1;
    notes.push(newNote);
    set(projectName, notes);
  };

  const updateNotes = (position, arr) => {
    const currentNotes = get(projectName);
    currentNotes[position] = note(...arr);
    currentNotes[position].position = position;
    set(projectName, currentNotes);
    console.log(get(projectName));
  };

  return {
    projectName,
    addNote,
    getNotes,
    updateNotes,
  };
};

export default project;
