import './AddQuestionsByQuizById.css';
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { getOneQuizById, addQuestions } from '../../../services/quizServices';

function AddQuestionsByQuizById() {
    let [quiz, setQuiz] = React.useState({});
    let [questions, setQuestions] = React.useState([]);
    let navigate = useNavigate();
    let params = useParams();

    React.useEffect(() => {
        getOneQuizById(params.id)
            .then(result => {
                setQuiz(result);
                setQuestions(result.questions)
            })
    }, [params.id]);

    function postQuestionHandler(e) {
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
        
        setTimeout(() => {
            e.target.reset();
        }, 100)
    }

    function postQuizHandler(e) {

        addQuestions(questions, params.id)
            .then(() => {
                navigate('/');
            })
    }

    return (
        <>

            <h3>{quiz?.title}</h3>
            <h5>{quiz.subject?.name}</h5>

            <form className="question-form" onSubmit={postQuestionHandler}>

                <div className="question-div">
                    <label htmlFor="create-quiz-question">Question</label>
                    <input type="text" id="create-quiz-question" name="question" />

                    <label htmlFor="create-quiz-answers">Answers</label>
                    <input type="text" id="create-quiz-answers" name="answers" />
                    <input type="text" id="create-quiz-answers" name="answers" />
                    <input type="text" id="create-quiz-answers" name="answers" />

                    <div className="correct-answer-div">
                        <p>Correct Answer</p>
                        <input type="radio" name="correct" value='0' /> A
                        <input type="radio" name="correct" value='1' /> B
                        <input type="radio" name="correct" value='2' /> C
                    </div>

                    <button type="submit" className="create-question-button">Save Question</button>
                </div>
            </form>

            <button type="button" className="finish-quiz-button" onClick={postQuizHandler}>Create Quiz</button>
        </>
    )

}

export default AddQuestionsByQuizById;