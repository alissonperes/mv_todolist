const Todos = (name, desc, prio, dueDate) => {
  const todo = {
    name,
    desc,
    prio,
    dueDate,
    id: new Date().getTime(),
  };

  return todo;
};

const Project = (name, id = new Date().getTime(), todos = []) => ({
  id,
  name,
  todos,

  addTodo(todoName, desc, prio, dueDate) {
    this.todos.push(Todos(todoName, desc, prio, dueDate));
  },
});

export default Project;
