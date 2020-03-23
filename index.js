const project = title => {
  this.title = title;
  const notes = [];
  const getNotes = () => notes;
  const addNote = (nTitle, description, dueDate, priority) => {
    const newNote = note(nTitle, description, dueDate, priority);
    notes.push({
      project: this.title,
      title: this.nTitle,
      description: this.description,
      dueDate: this.dueDate,
      priority: this.priority
    });
  };

  return { title, notes, addNote, getNotes };
};

const note = (nTitle, description, dueDate, priority) => {
  this.nTitle = nTitle;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;

  return { nTitle, description, dueDate, priority };
};

const newProject = project("Todo-list");
newProject.addNote("title", "description", "01012020", "urgent");
newProject.addNote("title2", "description2", "01012020", "urgent");
newProject.addNote("title3", "description3", "01012020", "urgent");
newProject.addNote("title4", "description4", "01012020", "urgent");

console.log(newProject.getNotes());
