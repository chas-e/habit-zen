import tokenService from './tokenService';
const BASE_URL = '/api/habits';

export default {
    create,
    index,
    deleteHabit
};

function create(habit) {
    const options = {
        method: 'POST',
        headers: new Headers({
            'Content-type': 'application/json',
            "Authorization": "Bearer " + tokenService.getToken()
        }),
        body: JSON.stringify(habit)
    };
    return fetch(BASE_URL, options).then(res => res.json());
}

function index() {
    return fetch(BASE_URL).then(res => res.json());
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
  