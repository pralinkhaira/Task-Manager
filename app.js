const todoList = document.getElementById('todo-list');
const newTodoInput = document.getElementById('new-todo');
const addTodoButton = document.getElementById('add-todo');

addTodoButton.addEventListener('click', () => {
  const newTodo = document.createElement('li');
  newTodo.innerText = newTodoInput.value;
  todoList.appendChild(newTodo);
  newTodoInput.value = '';
});
