import './QuizCard.css'
import React from 'react';
import { Link } from 'react-router-dom';

function QuizCard({ quiz }) {
    
    return (
        <>
            {
                quiz.quiz
                    ?
                    <div className="quiz-card">
                        <h3>{quiz.quiz.title}</h3>
                        <p>Score: {quiz.score}</p>
                        <Link to={`/quiz/${quiz.quiz._id}`} className="try-again-button">Try Again</Link>
                    </div>
                    :
                    <h4>Try your first quiz <Link to='/'></Link></h4>
            }
        </>
    )
}

export default QuizCard;