import { Link } from 'react-router-dom';
import React from 'react';
import { AuthContext } from '../../contexts/AuthContext';

function UserNav() {
    let context = React.useContext(AuthContext);
    let user = context.userContext;

    return (
        <>

            <li><Link to="/" >Welcome, {user.name} !</Link></li>
            <li><Link to="/user/logout">Logout</Link></li>

        </>
    )
}

export default UserNav;