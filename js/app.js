/**
 * deletes all HTMLElements with tag TODO-ITEM and append them to Dom body
 * @author Shakif Malek <shakif.malek@gmail.com>
 * @returns {Promise} Nothing
 */
function reloadTodos() {
  return new Promise((resolve) => {
    const todos = getTodosFromDom();
    removeTodos(todos);
    addTodosToBody();
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
 * get todos from API and add HTMLElements to DOM body
 * @author Shakif Malek <shakif.malek@gmail.com>
 * @param {HTMLCollectionOf<Element>} todos
 */
async function addTodosToBody() {
  const todoData = await getTodos();
  if(todoData && todoData.length > 0) {
    todoData.forEach(item => {
      const element = document.createElement("todo-item");
      element.id = item.id;
      element.value = item;
      element.addEventListener("click", onClick, false);
      item.checked && element.setAttribute("checked", "checked");
      element.setTodoItem(item);
      document.body.appendChild(element);
    });
  }else {
    const element = document.createElement("p");
    element.style.color = "grey";
    element.style.textAlign = "center";
    element.innerText = "Nothing to do";
    document.body.appendChild(element);
  }
}

/**
 * excecuted on first load
 * @author Shakif Malek <shakif.malek@gmail.com>
 * @returns {void} Nothing
 */
window.addEventListener('load', function () {
  reloadTodos();
});
