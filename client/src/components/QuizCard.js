import './QuizCard.css'
import { Link } from 'react-router-dom';

function QuizCard({ quiz }) {

    return (
        <>
            <div className="quiz-card">
                <h3>{quiz.title}</h3>
                <Link to={`/${quiz.subject.link}/${quiz._id}`} className="go-to-button">Go To Quizzes</Link>
            </div>
        </>
    )
}

export default QuizCard;