import './QuestionCard.css';
import React from 'react';

let count = 0;

function QuestionCard(props) {
    let [state, setState] = React.useState(0);

    function getAnswer(currentAnswer) {

        if (currentAnswer == props.quest.correctAnswer) {
            count += 1;
            state = count;
            setState(state);
        }
    }

    return (
        <>
            <div className="question-div">
                <p>{props.quest.question}</p>
                <div className="answers-div">
                    <input type="radio" value='0' onClick={(e => getAnswer(e.target.value))} />{props.quest.answers[0]}
                    <input type="radio" value='1' onClick={(e => getAnswer(e.target.value))} />{props.quest.answers[1]}
                    <input type="radio" value='2' onClick={(e => getAnswer(e.target.value))} />{props.quest.answers[2]}
                </div>
            </div>
        </>
    )
}

export default QuestionCard;