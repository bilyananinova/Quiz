import './QuizCard.css'
import { Link } from 'react-router-dom';

function QuizCard({ quiz }) {

    return (
        <>
            <div className="quiz-card">
                <h3>{quiz.title}</h3>
                <Link to={`/quiz/${quiz._id}`} className="go-to-button">Start</Link>
                <Link to={`/add-quiz/${quiz._id}`} className="go-to-button">Add Questions</Link>
            </div>
        </>
    )
}

export default QuizCard;