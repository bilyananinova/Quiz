import './QuizCard.css'
import React from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../../contexts/AuthContext';

function QuizCard({ quiz, handleDialog }) {
    let state = React.useContext(AuthContext);
    let user = state.user;

    return (
        <>
            <div className="quiz-card">
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
                        <button onClick={() => handleDialog(true, 'Are you sure you want to delete this quiz?', quiz._id)} className="delete-button" >Delete</button>
                    </>
                    :
                    null
                }
            </div>
        </>
    )
}

export default QuizCard;