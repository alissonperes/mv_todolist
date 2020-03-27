class TodosModel {
  constructor(name, description = null, dueDate = null, priority = 'Low') {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.id = new Date().getTime();
  }
}

export default TodosModel;
