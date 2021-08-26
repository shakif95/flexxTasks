/**
 * deletes all HTMLElements with tag TODO-ITEM and append them to Dom body
 * @author Shakif Malek <shakif.malek@gmail.com>
 * @returns {Promise} Nothing
 */
function reloadTodos() {
  return new Promise((resolve) => {
    const todos = getTodosFromDom();
    const bodyTodos = [...todos]; // keeping a clone for the todo list as they are needed to be add again in the DOM body
    removeTodos(todos);
    addTodosToBody(bodyTodos);
    resolve();
  });
}

/**
 * returns a collection of HTMLElements with tag TODO-ITEM
 * @author Shakif Malek <shakif.malek@gmail.com>
 * @returns {HTMLCollectionOf<Element>} todos
 */
function getTodosFromDom() {
  return document.getElementsByTagName('TODO-ITEM');
}

/**
 * remove HTMLElements from DOM
 * @author Shakif Malek <shakif.malek@gmail.com>
 * @param {HTMLCollectionOf<Element>} todos
 */
function removeTodos(todos) {
  while (todos[0]) {
    todos[0].parentNode.removeChild(todos[0]);
  }
}

/**
 * add HTMLElements to DOM body
 * @author Shakif Malek <shakif.malek@gmail.com>
 * @param {HTMLCollectionOf<Element>} todos
 */
function addTodosToBody(todos) {
  const todoData = getTodos();
  todoData.forEach(item => {
    const element = document.createElement("todo-item");
    element.id = item.id;
    element.addEventListener("click", onClick, false);
    item.checked && element.setAttribute("checked", "checked");
    element.setTodoItem(item);
    document.body.appendChild(element);
  });;
}

/**
 * excecuted on first load
 * @author Shakif Malek <shakif.malek@gmail.com>
 * @returns {void} Nothing
 */
window.addEventListener('load', function () {
  reloadTodos();
});
