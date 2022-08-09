import './QuizCard.css'
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { deleteQuiz } from '../../../services/quizServices';
import { AuthContext } from '../../../contexts/AuthContext';

function QuizCard({ quiz }) {
    let navigate = useNavigate();
    let state = React.useContext(AuthContext);
    let user = state.user;
    
    function deleteHandler(e) {
        deleteQuiz(quiz._id)
            .then(() => {
                navigate(0);
            })

    }

    return (
        <>
            <div className="newest-quiz-card">
                <h3>{quiz.title}</h3>
                {user?.id
                    ?
                    <Link to={`/quiz/${quiz._id}`} className="start-button">Start</Link>
                    : null
                }
                {user?.isAdmin
                    ?
                    <>
                        <Link to={`/add-quiz/${quiz._id}`} className="add-button">Add Questions</Link>
                        <Link to={`/quiz/${quiz._id}/edit`} className="edit-button">Edit</Link>
                        <button onClick={() => deleteHandler(quiz._id)} className="delete-button" >Delete</button>
                    </>
                    :
                    null
                }
            </div>
        </>
    )
}

export default QuizCard;