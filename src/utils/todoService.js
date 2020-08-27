import tokenService from './tokenService';
const BASE_URL = '/api/todos';

export default {
  index,
  create,
  deleteToDo,
  editToDo,
  doneToDo
};

function create(todo, user) {
  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "Authorization": "Bearer " + tokenService.getToken()
    },
    body: JSON.stringify(todo)
  };
  return fetch(BASE_URL + `/${user._id}`, options).then(res => res.json());
}


function index(user) {
  return fetch(BASE_URL + `/${user._id}`).then(res => res.json());
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

function doneToDo(todo) {
  const options = {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      "Authorization": "Bearer " + tokenService.getToken()
    },
    body: JSON.stringify(todo)
  };
  return fetch(BASE_URL + `/update/${todo._id}`, options).then(res => res.json());
}


function editToDo(todo, updatedTodo) {
  const options = {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      "Authorization": "Bearer " + tokenService.getToken()
    },
    body: JSON.stringify({
      text: updatedTodo
    })
  };
  return fetch(BASE_URL + `/${todo._id}`, options).then(res => res.json());
}