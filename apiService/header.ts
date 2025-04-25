export function getHeader() {
    const headers: { [key: string]: string } = {};
    headers['Content-type'] = 'application/json; charset=UTF-8';


    return headers;
}