class Todos {
  constructor(name, description = '', dueDate = null, priority = 1) {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.id = new Date().getTime();
  }
}

export default Todos;
