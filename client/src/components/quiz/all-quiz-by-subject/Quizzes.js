import './Quizzes.css';
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { getAllQuizzesBySubjectId, deleteQuiz } from '../../../services/quizServices';

import QuizCard from './QuizCard';
import Dialog from '../../common/dialog/Dialog';

function Quizzes() {
    let navigate = useNavigate();
    let [list, setList] = React.useState([]);
    let params = useParams();
    let [isLoading, setIsLoading] = React.useState(false);
    let [message, setMessage] = React.useState('');
    let [quizId, setQuizId] = React.useState('');

    React.useEffect(() => {
        getAllQuizzesBySubjectId(params.id)
            .then(result => {
                setList(result);

            })
    }, [params.id, list]);

    function handleDialog(isLoading, message, id) {
        setIsLoading(isLoading);
        setMessage(message);
        setQuizId(id);
    }

    function isDelete(choose) {
        if (choose) {
            setIsLoading(false);
            setMessage('');
            deleteHandler(quizId);
        } else {
            setIsLoading(false);
            setMessage('');
            setQuizId('');
        }
    }

    function deleteHandler(id) {
        deleteQuiz(id)
            .then(() => {
                navigate(0);
            })
    }

    return (
        <>
            {isLoading && <Dialog message={message} isDelete={isDelete} />}

            <section className="quizzes-section">
                {
                    list
                        .map((q, i) =>
                            <QuizCard
                                key={q._id}
                                quiz={q}
                                handleDialog={handleDialog}
                            />)
                }
            </section>
        </>
    )


}

export default Quizzes;