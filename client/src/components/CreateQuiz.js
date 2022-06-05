import './CreateQuiz.css';
import React from 'react';

function CreateQuiz() {
    let [subjects, setSubjects] = React.useState([]);
    let [title, setTitle] = React.useState('');
    let [subject, setSubject] = React.useState('');
    let [questions, setQuestions] = React.useState([
        {
            content: '',
            answers: []
        }
    ])

    React.useEffect(() => {
        fetch('http://localhost:9000/')
            .then((response) => response.json())
            .then((res) => setSubjects(res))
    }, [])

    function createNewSubject(e) {
        e.preventDefault();

        fetch('http://localhost:9000/create-quiz', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                subject: e.target.newSubject.value
            })
        })
            .then(() => {
                e.target.newSubject.value = '';
            })
    }
    
    function postQuestion(e) {
        e.preventDefault();
        
        if (e.target.question.value === '' &&
        e.target.answers[0].value === '' &&
        e.target.answers[1].value === '' &&
        e.target.answers[2].value === '') {
            return;
        }
        
        setQuestions((questions) => [
            ...questions,
            {
                question: e.target.question.value,
                answers: [
                    e.target.answers[0].value,
                    e.target.answers[1].value,
                    e.target.answers[2].value,
                ]
            }
        ])
    }

    function postQuiz(e) {
        questions = questions.slice(1)

        fetch('http://localhost:9000/create-quiz', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                subject,
                title,
                questions
            })
        })
    }

    return (
        <>
            <div className="create-category">
                <h5>Create New Subject</h5>
                <form className="create-category-form" onSubmit={createNewSubject}>
                    <input type="text" id="create-category" name="newSubject" />
                    <button type="submit" className="create-category-button">Add</button>
                </form>
            </div>

            <div className="create-quiz" >
                <h3>Create New Quiz</h3>

                <form className="main-form" >
                    <div className="category-div">
                        <label htmlFor="create-quiz-category">Subject</label>
                        <select onChange={e => setSubject(e.target.value)} >
                            {subjects
                                .sort((a, b) => a.name.localeCompare(b.name))
                                .map(s => {
                                    return <option
                                        value={s._id}
                                        key={s._id}>
                                        {s.name}
                                    </option>
                                })}
                        </select>
                    </div>

                    <div className="title-div">
                        <label htmlFor="create-quiz-title">Title</label>
                        <input type="text" id="create-quiz-title" name="title" onChange={e => setTitle(e.target.value)} />
                    </div>
                </form>

                <form className="question-form" onSubmit={postQuestion}>

                    <div className="question-div">
                        <label htmlFor="create-quiz-question">Question</label>
                        <input type="text" id="create-quiz-question" name="question" />

                        <label htmlFor="create-quiz-answers">Answers</label>
                        <input type="text" id="create-quiz-answers" name="answers" />
                        <input type="text" id="create-quiz-answers" name="answers" />
                        <input type="text" id="create-quiz-answers" name="answers" />

                        <button type="submit" className="create-question-button" >Save Question</button>
                    </div>
                </form>


                <button type="button" className="create-quiz-button" onClick={postQuiz}>Create Quiz</button>

            </div>
        </>
    )

}

export default CreateQuiz;