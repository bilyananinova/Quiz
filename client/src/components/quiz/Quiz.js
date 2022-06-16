import './Quiz.css'
import React from 'react';
import { useParams } from 'react-router-dom';
import QuestionCard from './QuestionCard';

function Quiz() {
    let params = useParams();
    let [quiz, setQuiz] = React.useState({});
    let [questionsArr, setQuestionsArr] = React.useState([]);

    React.useEffect(() => {
        fetch(`http://localhost:9000/quiz/${params.id}`)
            .then(res => res.json())
            .then(result => {
                setQuiz(result);
                setQuestionsArr(result.questions);
            })
    }, [params.id]);

    return (
        <>
            <div>
                <h3>{quiz.title}</h3>
                {
                    questionsArr.map((q, i) =>
                        <QuestionCard
                            key={q._id}
                            quest={q} />
                    )
                }
            </div>
        </>
    )
}

export default Quiz;