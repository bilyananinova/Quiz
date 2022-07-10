import './Quiz.css'
import React from 'react';
import { useParams, Link } from 'react-router-dom';
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
            <div className="quiz-div">
                <h3>{quiz.title}</h3>
                {
                    questionsArr.map((q, i) =>
                        <QuestionCard
                            key={q._id}
                            quest={q} />
                    )
                }
                <div className="admin-btns">

                    <Link
                        to={`/quiz/${params.id}/edit`}
                        className="edit-btn">
                        Edit
                </Link>
                    <button className="delete-btn">Delete</button>
                </div>
            </div>
        </>
    )
}

export default Quiz;