import './Quizzes.css';
import React from 'react';
import { useParams } from 'react-router-dom';

import QuizCard from './QuizCard';
import { getAllQuizzesBySubjectId } from '../../../services/quizServices';

function Quizzes() {
    let [list, setList] = React.useState([]);
    let params = useParams();

    React.useEffect(() => {
        getAllQuizzesBySubjectId(params.id)
            .then(result => {
                setList(result);

            })
    }, [params.id])

    return (
        <>
            <section className="quizzes-section">
                {
                    list
                        .map((q, i) =>
                            <QuizCard
                                key={q._id}
                                quiz={q} />)
                }
            </section>
        </>
    )


}

export default Quizzes;