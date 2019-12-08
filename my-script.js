// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
  createTodoListApp();
})

const createTodoListApp = () => {
  const TodoListApp = document.getElementById('root');
  const InputElement = document.createElement('input');
  const TodoListElement = document.createElement('div');

  TodoListElement.innerHTML = '<div> 1 element </div> <div> 2 element </div>';

  TodoListApp.appendChild(InputElement);
  TodoListApp.appendChild(TodoListElement);
}
