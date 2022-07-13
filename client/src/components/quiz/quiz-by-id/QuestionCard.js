import './QuestionCard.css';
import React from 'react';

function QuestionCard({ quest, getAnswer }) {

    return (
        <>
            <div className="quiz-question-div">
                <p>{quest.question}</p>
                <div className="answers-div">
                    <input type="radio" value='0' onClick={(e) => getAnswer(quest.correctAnswer, e.target.value)} />{quest.answers[0]}
                    <input type="radio" value='1' onClick={(e) => getAnswer(quest.correctAnswer, e.target.value)} />{quest.answers[1]}
                    <input type="radio" value='2' onClick={(e) => getAnswer(quest.correctAnswer, e.target.value)} />{quest.answers[2]}
                </div>
            </div>
        </>
    )
}

export default QuestionCard;