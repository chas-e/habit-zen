import tokenService from './tokenService';
const BASE_URL = '/api/todos';

export default {
  index,
  create,
  deleteToDo,
  editToDo
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

function deleteToDo(todo) {
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

function editToDo(todo, updatedTodo) {
  const options = {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      "Authorization": "Bearer " + tokenService.getToken()
    },
    body: JSON.stringify({text: updatedTodo})
  };
  return fetch(BASE_URL + `/${todo._id}`, options).then(res => res.json());
}