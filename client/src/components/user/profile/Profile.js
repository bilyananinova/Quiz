import './Profile.css';
import React from 'react';

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
    }, [user.id])

    return (
        <>
            <section className="profile-section">
                {
                    list.length > 0
                        ? list
                            .map((q, i) =>
                                <QuizCard
                                    key={q._id}
                                    quiz={q} />)
                        :
                        null
                }
            </section>
        </>
    )
}

export default Profile;