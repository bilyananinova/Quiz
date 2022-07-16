import './QuizCard.css'
import { Link, useNavigate } from 'react-router-dom';

import { deleteQuiz } from '../../../services/quizServices';

function QuizCard({ quiz }) {
    let navigate = useNavigate();

    function deleteHandler(e) {
        deleteQuiz(quiz._id)
            .then(() => {
                navigate('/');
            })

    }


    return (
        <>
            <div className="quiz-card">
                <h3>{quiz.title}</h3>
                <Link to={`/quiz/${quiz._id}`} className="start-button">Start</Link>
                <Link to={`/add-quiz/${quiz._id}`} className="add-button">Add Questions</Link>
                <button onClick={() => deleteHandler(quiz._id)} className="delete-button" >Delete</button>
            </div>
        </>
    )
}

export default QuizCard;