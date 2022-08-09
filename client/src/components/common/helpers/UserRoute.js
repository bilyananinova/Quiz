import React from 'react';
import { Navigate} from 'react-router-dom';

import { AuthContext } from '../../../contexts/AuthContext'

function UserRoute({children}) {
    let state = React.useContext(AuthContext);
    let user = state.user;

    if(!user?.id) {
        return <Navigate to="/user/login" />;
    }

    return children;
}

export default UserRoute;