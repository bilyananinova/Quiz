let host = 'localhost';
let port = '9000';

function getAllSubjects() {
    return fetch(`http://${host}:${port}`, {
        credentials: "include"
    })
        .then(res => res.json())
}

function getAllQuizzesBySubjectId(id) {
    return fetch(`http://${host}:${port}/subject/${id}`, {
        credentials: "include"
    })
        .then(res => res.json())
}

function getOneQuizById(id) {
    return fetch(`http://${host}:${port}/quiz/${id}`, {
        credentials: "include"
    })
        .then(res => res.json())
}

function postNewSubject(subject) {
    return fetch(`http://${host}:${port}/create-quiz`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: subject
        }),
        credentials: "include"
    })
}

function postNewQuiz(subject, title, questions) {
    return fetch(`http://${host}:${port}/create-quiz`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            subject,
            title,
            questions
        }),
        credentials: "include"
    })
}



export { getAllSubjects, getAllQuizzesBySubjectId, getOneQuizById, postNewSubject, postNewQuiz }