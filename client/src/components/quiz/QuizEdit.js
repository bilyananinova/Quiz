import './QuizEdit.css'
import React from 'react';
import { useParams } from 'react-router-dom';

function QuizEdit() {
    let params = useParams();
    let [quiz, setQuiz] = React.useState({});
    let [questionsArr, setQuestionsArr] = React.useState([]);
    let [questions, setQuestions] = React.useState([
        {
            question: '',
            answers: [],
            correctAnswer: '',
        }
    ])

    React.useEffect(() => {
        fetch(`http://localhost:9000/quiz/${params.id}`)
            .then(res => res.json())
            .then(result => {
                setQuiz(result);
                setQuestionsArr(result.questions);
            })
    }, [params.id]);

    function editQuestion(e) {
        e.preventDefault();

        setQuestions((questions) => [
            ...questions,
            {
                question: e.target.question.value,
                answers: [
                    e.target.answers[0].value,
                    e.target.answers[1].value,
                    e.target.answers[2].value,
                ],
                correctAnswer: e.target.correct.value,
            }
        ])

        console.log(questions);
    }

    function editQuiz(e) {
        questions = questions.slice(1);

    //     fetch('http://localhost:9000/crequiz', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             subject,
    //             title,
    //             questions
    //         })
    //     });

    //     navigate('/');
    console.log(questions);
    }

    return (
        <>
            <h3>{quiz.title}</h3>
            {
                questionsArr.map((q, i) =>

                    <form className="edit-question-form" onSubmit={editQuestion} key={q._id}>

                        <div className="question-div">
                            <label htmlFor="create-quiz-question">Question</label>
                            <input type="text" defaultValue={q.question} name="question" />

                            <label htmlFor="create-quiz-answers">Answers</label>
                            <input type="text" defaultValue={q.answers[0]} name="answers" />
                            <input type="text" defaultValue={q.answers[1]} name="answers" />
                            <input type="text" defaultValue={q.answers[2]} name="answers" />

                            <div className="correct-answer-div">
                                <p>Correct Answer</p>
                                <input type="radio" name="correct" checked={q.correctAnswer == 0}  /> A
                                <input type="radio" name="correct" checked={q.correctAnswer == 1}  /> B
                                <input type="radio" name="correct" checked={q.correctAnswer == 2}  /> C
                            </div>
                            <button type="submit" className="edit-quiz-button" >Edit Question</button>
                        </div>
                    </form>
                )
            }
            <button type="button" className="edit-quiz-button" onClick={editQuiz}>Edit Quiz</button>

        </>
    )
}

export default QuizEdit;