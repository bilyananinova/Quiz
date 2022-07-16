import './CreateQuiz.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { getAllSubjects, createNewSubject, createNewQuiz } from '../../../services/quizServices';

function CreateQuiz() {
    let navigate = useNavigate();
    let [subjects, setSubjects] = React.useState([]);
    let [subject, setSubject] = React.useState();

    React.useEffect(() => {
        getAllSubjects()
            .then((res) => setSubjects(res))
    }, [subjects]);

    function createNewSubjectHandler(e) {
        e.preventDefault();

        createNewSubject(e.target.newSubject.value)
            .then(() => {
                e.target.newSubject.value = '';
            })
    }

    function createNewQuizHandler(e) {
        e.preventDefault();
        createNewQuiz(subject, e.target.title.value)
            .then(() => {
                navigate('/');
            })
    }

    return (
        <>
            <div className="create-category">
                <h5>Create New Subject</h5>
                <form className="create-category-form" onSubmit={createNewSubjectHandler}>
                    <input type="text" id="create-category" name="newSubject" />
                    <button type="submit" className="create-category-button">Add</button>
                </form>
            </div>

            <div className="create-quiz" >
                <h3>Create New Quiz</h3>

                <form onSubmit={createNewQuizHandler}>

                    <div className="category-div">
                        <label htmlFor="create-quiz-category">Subject</label>
                        <select onChange={e => setSubject(e.target.value)} >
                            {subjects
                                .sort((a, b) => a.name.localeCompare(b.name))
                                .map(s => <option value={s._id} key={s._id}> {s.name}</option>)}
                        </select>
                    </div>

                    <div className="title-div">
                        <label htmlFor="create-quiz-title">Title</label>
                        <input type="text" id="create-quiz-title" name="title" />
                    </div>


                    <button type="submit" className="create-quiz-button" >Create Quiz</button>

                </form>
            </div>
        </>
    )

}

export default CreateQuiz;