import tokenService from './tokenService';
const BASE_URL = '/api/todos';

export default {
  index,
  create,
  deleteTodo,
  editToDo,
  doneToDo
};

function create(todo) {
  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "Authorization": "Bearer " + tokenService.getToken()
    },
    body: JSON.stringify(todo)
  };
  return fetch(BASE_URL, options).then(res => res.json());
}


function index() {
  return fetch(BASE_URL).then(res => res.json());
}

function deleteTodo(todo) {
  const options = {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      "Authorization": "Bearer " + tokenService.getToken()
    },
    body: JSON.stringify(todo)
  };
  return fetch(BASE_URL + `/${todo._id}`, options).then(res => res.json());
}

function doneToDo(todo) {
  const options = {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      "Authorization": "Bearer " + tokenService.getToken()
    },
    body: JSON.stringify(todo)
  };
  return fetch(BASE_URL + `/${todo._id}`, options).then(res => res.json());
}


function editToDo(todo) {
  console.log("todo", todo)
  const options = {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      "Authorization": "Bearer " + tokenService.getToken()
    },
    body: JSON.stringify(todo)
  };
  return fetch(BASE_URL + `/${todo._id}`, options).then(res => res.json());
}

