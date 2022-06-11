import './Quiz.css'
import React from 'react';
import { useParams } from 'react-router-dom';

function Quiz() {
    let params = useParams();
    let [quiz, setQuiz] = React.useState();

    React.useEffect(() => {
        fetch(`http://localhost:9000/quiz/${params.id}`)
            .then(res => res.json())
            .then(result => {
                setQuiz(result);
            })
    }, [])

    return (
        <>
            <div>
                <h3>Hi</h3>
            </div>
        </>
    )
}

export default Quiz;