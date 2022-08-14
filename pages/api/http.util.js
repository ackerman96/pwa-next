export const  request = (baseUrl, method, body, endpoint) => {
    return fetch(baseUrl+endpoint, {
        method: method,
        body: JSON.stringify(body)
    }).then(res => res.json());
}