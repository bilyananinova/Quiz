import './QuestionCard.css';
import React from 'react';

function QuestionCard(props) {
    let [state, setState] = React.useState({ score: 0 });

    function getAnswer(currentAnswer) {
        if (currentAnswer == props.quest.correctAnswer) {
            setState({
                score: state.score +1,
            });

        }
    }

    console.log(state);

    return (
        <>
            <div className="quest-div">
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