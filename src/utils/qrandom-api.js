export function getRandomQ() {
    const url = `http://quotes.rest/quote/random.json?api_key=_yTIPuxE0GiQQcOSMbwuqweF`

    return fetch(url, {
        mode: "cors"
    }).then(res => res.json());
}