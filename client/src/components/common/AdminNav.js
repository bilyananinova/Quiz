import { Link } from 'react-router-dom';
import React from 'react';
import { AuthContext } from '../../contexts/AuthContext';

function AdminNav() {
    let state = React.useContext(AuthContext);
    let user = state.user;

    return (
        <>

            <li><Link to="/create-quiz" >Create Quiz</Link></li>
            <li><Link to={`/user/profile`} >Welcome, {user.name} !</Link></li>
            <li><Link to="/user/logout">Logout</Link></li>

        </>
    )
}

export default AdminNav;