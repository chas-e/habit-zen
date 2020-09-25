export function getRandomQ() {
    // const API_KEY = process.env.REACT_APP_KEY;
    const url = `https://quotes.rest/quote/random.json?`
    return fetch(url, {
        mode: "cors"
    }).then(res => res.json());
}