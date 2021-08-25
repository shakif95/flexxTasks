/**
 * deletes all HTMLElements with tag TODO-ITEM and append them to Dom body
 * @author Shakif Malek <shakif.malek@gmail.com>
 * @returns {Promise} Nothing
 */
function shiftTodos() {
  return new Promise((resolve) => {
    const todos = getTodos();
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
function getTodos() {
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
  todos.forEach(item => document.body.appendChild(item));
}

/**
 * excecuted on first load
 * @author Shakif Malek <shakif.malek@gmail.com>
 * @returns {void} Nothing
 */
window.addEventListener('load', function () {
  shiftTodos();
});