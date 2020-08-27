export function getRandomQ() {
    const API_KEY = process.env.REACT_APP_KEY;
    const url = `http://quotes.rest/quote/random.json?api_key=${API_KEY}`
    return fetch(url, {
        mode: "cors"
    }).then(res => res.json());
}