let host = 'localhost';
let port = '9000';

function register(name, email, password) {

    return fetch(`http://${host}:${port}/user/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Credentials": true,
        },
        body: JSON.stringify({ name, email, password }),
        credentials: "include",
    })
}

function login(email, password) {

    return fetch(`http://${host}:${port}/user/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Credentials": true,
        },
        body: JSON.stringify({ email, password }),
        credentials: "include",
    })
}

function logout() {
    return fetch(`http://${host}:${port}/user/logout`, {
        method: 'GET',
        credentials: 'include'
    })
}

export {
    login,
    register,
    logout
}