import './Profile.css';
import React from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../../contexts/AuthContext';
import { getProfile } from '../../../services/userServices';

import QuizCard from './QuizCard';

function Profile() {
    let [list, setList] = React.useState([]);
    let state = React.useContext(AuthContext);
    let user = state.user;

    React.useEffect(() => {
        getProfile(user.id)
            .then(user => {
                setList(user.quizzes);
            })
    }, []);

    let sortArray = type => {
        let sorted = [];

        if (type === 'sortAZ') {
            sorted = [...list].sort((a, b) => a.quiz.title.localeCompare(b.quiz.title));
        } else if (type === 'sortZA') {
            sorted = [...list].sort((a, b) => b.quiz.title.localeCompare(a.quiz.title));
        } else if (type === 'scoreUp') {
            sorted = [...list].sort((a, b) => a.score - b.score);
        } else if (type === 'scoreDown') {
            sorted = [...list].sort((a, b) => b.score - a.score);
        }

        setList(sorted);
    };

    return (
        <>
            <div className="sort-div">
                <label htmlFor="sort">Sort By</label>
                <select id="sort" onChange={(e) => sortArray(e.target.value)}>
                    <option value="sortAZ">Name: A-Z</option>
                    <option value="sortZA">Name: Z-A</option>
                    <option value="scoreUp">Score: ↑</option>
                    <option value="scoreDown">Score: ↓</option>
                </select>
            </div>
            <section className="profile-section">
                {
                    list.length > 0
                        ? list
                            .map((q, i) =>
                                <QuizCard
                                    key={q._id}
                                    quiz={q} />)
                        :
                        <h4>Try your first quiz <Link to='/' className="home-link">here</Link>.</h4>
                }
            </section>
        </>
    )
}

export default Profile;