import tokenService from './tokenService';
const BASE_URL = '/api/habits';

export default {
    create,
    index
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