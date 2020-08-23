export function getAllQuotes() {
    const url = ``;

    return fetch(url, {mode: "cors"}).then(res => res.json());
}