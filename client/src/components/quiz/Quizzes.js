import './Quizzes.css';
import React from 'react';
import { useParams } from 'react-router-dom';

import QuizCard from './QuizCard';

function Quizzes() {
    let [list, setList] = React.useState([]);
    let params = useParams();

    React.useEffect(() => {
        fetch(`http://localhost:9000/subject/${params.id}`)
            .then(res => res.json())
            .then(result => {
                setList(result);
            })
    }, [])

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