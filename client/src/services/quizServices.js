let host = 'localhost';
let port = '9000';

function getAllQuizzesBySubjectId(id) {
    return fetch(`http://${host}:${port}/subject/${id}`, {
        credentials: "include"
    })
        .then(res => res.json())
}

function getLastQuizzes() {
    return fetch(`http://${host}:${port}/newest`, {
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

function createNewQuiz(subject, title) {
    return fetch(`http://${host}:${port}/create-quiz`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ subject, title }),
        credentials: "include"
    })
}

function addQuestions(questions, id) {
    return fetch(`http://${host}:${port}/add-quiz/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ questions }),
        credentials: "include"
    })
}

function deleteQuiz(id) {
    return fetch(`http://${host}:${port}/quiz/${id}`, {
        method: "DELETE",
        credentials: "include"
    })
}

export {
    getAllQuizzesBySubjectId,
    getOneQuizById,
    getLastQuizzes,
    createNewQuiz,
    addQuestions,
    deleteQuiz,
}