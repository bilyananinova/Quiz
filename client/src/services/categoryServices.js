let host = 'localhost';
let port = '9000';

function getAllSubjects() {
    return fetch(`http://${host}:${port}`, {
        credentials: "include"
    })
        .then(res => res.json())
}

function createNewSubject(subject) {
    return fetch(`http://${host}:${port}/create-quiz`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: subject }),
        credentials: "include"
    })
}

function deleteSubject(id) {
    return fetch(`http://${host}:${port}/subject/${id}`, {
        method: "DELETE",
        credentials: "include"
    })
}

export {
    getAllSubjects,
    createNewSubject,
    deleteSubject
}