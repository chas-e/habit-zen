import tokenService from './tokenService';
const BASE_URL = '/api/habits';

export default {
  create,
  index,
  deleteHabit,
  doneHabit,
  editHabit
};

// client side function to allow a user to create a new habit
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

// client side function to get a user's habits and render them 
function index(user) {
  return fetch(BASE_URL + `/${user._id}`).then(res => res.json());
}

// client side function to delete a habit
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

// function to mark habits as done or not done
function doneHabit(habit) {
  const options = {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      "Authorization": "Bearer " + tokenService.getToken()
    },
    body: JSON.stringify(habit)
  };
  return fetch(BASE_URL + `/update/${habit._id}`, options).then(res => res.json());
}

// client side request to edit a habit
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