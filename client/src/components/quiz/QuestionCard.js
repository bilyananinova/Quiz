import './QuestionCard.css'
import React from 'react';
import { useParams } from 'react-router-dom';

function QuestionCard({ quest }) {

    return (
        <>
            <div className="quest-div">
                <p>{quest.question}</p>
                <div className="answers-div">
                    <input type="radio" />{quest.answers[0]}
                    <input type="radio" />{quest.answers[1]}
                    <input type="radio" />{quest.answers[2]}
                </div>
            </div>
        </>
    )
}

export default QuestionCard;