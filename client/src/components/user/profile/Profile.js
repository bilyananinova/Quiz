import './Profile.css';
import React from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../../contexts/AuthContext';
import { getProfile } from '../../../services/userServices';

import QuizCard from './QuizCard';

function Profile() {
    let [list, setList] = React.useState([]);
    let context = React.useContext(AuthContext);
    let user = context.userContext;

    React.useEffect(() => {
        getProfile(user.id)
            .then(user => {
                setList(user.quizzes);
            })
    }, [])

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
                        <h4>Try your first quiz <Link to='/'></Link></h4>
                }
            </section>
        </>
    )
}

export default Profile;