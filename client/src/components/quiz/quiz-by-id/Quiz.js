import './Quiz.css';
import React from 'react';
import { useParams, Link } from 'react-router-dom';

import { getOneQuizById } from '../../../services/quizServices';
import { setQuizToProfile } from '../../../services/userServices';
import { AuthContext } from '../../../contexts/AuthContext';

import QuestionCard from './QuestionCard';

function Quiz() {
    let params = useParams();
    let [quiz, setQuiz] = React.useState({});
    let [isActive, setActive] = React.useState(true);
    let [questionsArr, setQuestionsArr] = React.useState([]);
    let [score, setScore] = React.useState(0);
    let state = React.useContext(AuthContext);
    let user = state.user;

    React.useEffect(() => {
        getOneQuizById(params.id)
            .then(result => {
                setQuiz(result);
                setQuestionsArr(result.questions);
            })
    }, [params.id]);

    function getAnswer(currentAnswer, correctAnswer) {

        if (currentAnswer === correctAnswer) {
            setScore(score + 1);
        }
    };

    function showUserScore() {

        setQuizToProfile(user.id, params.id, score);
        setActive(false);
    }

    return (
        <>
            <div className={!isActive ? 'quiz-div is-visible' : 'quiz-div'}>
                <h3>{quiz.title}</h3>
                {
                    questionsArr
                        .map(q =>
                            < QuestionCard
                                key={q._id}
                                quest={q}
                                getAnswer={getAnswer} />
                        )
                }
            </div>

            <button className={!isActive ? 'finish-btn is-visible' : 'finish-btn'}
                onClick={showUserScore}>Finish Quiz
                </button>

            <div className={isActive ? 'score-div is-visible' : 'score-div'}>
                <h3>You have completed quiz!</h3>
                <p>Your score is: {score} of {questionsArr.length}</p>
                <Link to='/' className='go-home-btn'>Try another quiz</Link>
            </div>

        </>
    )
}

export default Quiz;