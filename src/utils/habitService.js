import tokenService from './tokenService';
const BASE_URL = '/api/habits';

export default {
  create,
  index,
  deleteHabit,
  doneHabit,
  editHabit
};

function create(habit, user) {
  const options = {
    method: 'POST',
    headers: new Headers({
      'Content-type': 'application/json',
      "Authorization": "Bearer " + tokenService.getToken()
    }),
    body: JSON.stringify(habit)
  };
  return fetch(BASE_URL + `/${user._id}`, options).then(res => res.json());
}

function index(user) {
  return fetch(BASE_URL + `/${user._id}`).then(res => res.json());
}

function deleteHabit(habit) {
  const options = {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      "Authorization": "Bearer " + tokenService.getToken()
    },
    body: JSON.stringify(habit)
  };
  return fetch(BASE_URL + `/${habit._id}`, options).then(res => res.json());
}

function doneHabit(habit) {
  const options = {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      "Authorization": "Bearer " + tokenService.getToken()
    },
    body: JSON.stringify(habit)
  };
  return fetch(BASE_URL + `/${habit._id}`, options).then(res => res.json());
}

function editHabit(habit, updatedHabit) {
  const options = {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      "Authorization": "Bearer " + tokenService.getToken()
    },
    body: JSON.stringify({
      habit: updatedHabit
    })
  };
  return fetch(BASE_URL + `/${habit._id}`, options).then(res => res.json());
}