let host = 'localhost';
let port = '9000';

function register(name, email, password, rePassword) {

    return fetch(`http://${host}:${port}/user/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Credentials": true,
        },
        body: JSON.stringify({ name, email, password, rePassword }),
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

function setQuizToProfile(userId, id, score) {

    return fetch(`http://${host}:${port}/user/profile`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId, id, score }),
        credentials: "include",
    })
}

function getProfile(userId) {
    return fetch(`http://${host}:${port}/user/profile/${userId}`, {
        credentials: "include"
    })
        .then(res => res.json())
}

export {
    login,
    register,
    logout,
    setQuizToProfile,
    getProfile
}