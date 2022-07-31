import './Newest.css';
import React from 'react';
import { useParams } from 'react-router-dom';

import QuizCard from './QuizCard';
import { getLastQuizzes } from '../../../services/quizServices';

function Newest() {
    let [list, setList] = React.useState([]);
    let params = useParams();

    React.useEffect(() => {
        getLastQuizzes(params.id)
            .then(result => {
                setList(result);

            })
    }, [params.id])

    console.log(list);
    return (
        <>
            <section className="newest-quizzes-section">
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

export default Newest;