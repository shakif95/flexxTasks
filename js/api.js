const BASE_URL = "https://flexxter.de/Tasks";
const GETAPI = `${BASE_URL}/get`;
const POSTAPI = `${BASE_URL}/save`;


// some test data in case of no valid server endpoint
const todos = [
  {
    id: 1,
    title: "delectus aut autem",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    checked: true
  },
  {
    id: 2,
    title: "quis ut nam facilis et officia qui",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    checked: false
  },
  {
    id: 3,
    title: "fugiat veniam minus",
    description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia",
    checked: false
  },
  {
    id: 4,
    title: "et porro tempora",
    description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    checked: true
  },
  {
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    checked: false
  },
  {
    id: 6,
    title: "qui ullam ratione quibusdam voluptatem quia omnis",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    checked: false
  }
]

/**
 * get todos from API
 * @author Shakif Malek <shakif.malek@gmail.com>
 * @returns {Promise} todos
 */
async function getTodos(projectId) {
  // TODO: uncommented it if there is a valid server enpoint
  // const URL = projectId ? `${GETAPI}/${projectId}` : GETAPI;
  // const response = await fetch(URL, {
  //   mode: "no-cors"
  // });
  // return await response.json();

  // TODO: remove it if there is a valid server enpoint
  return new Promise((resolve) => resolve(todos));
}

/**
 * save changed state of a todo item
 * @author Shakif Malek <shakif.malek@gmail.com>
 * @returns {Promise} updatedTodo
 */
function saveTodo(todo) {
  // TODO: uncommented it if there is a valid server enpoint
  // const response = await fetch(POSTAPI, {
  //   mode: "no-cors",
  //   method: "POST",
  //   body: todo
  // });
  // return await response.json();
  
  // TODO: remove the rest of the lines from here if there is a valid server enpoint
  todos = todos.map(item => {
    if(item.id === todo.id){
      return {
        ...item,
        title: todo.title,
        description: todo.description,
        checked: todo.checked,
      }
    }
  });
  return new Promise((resolve) => resolve(todo));;
}