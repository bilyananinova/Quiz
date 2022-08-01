import React from 'react';
import { Navigate} from 'react-router-dom';

import { AuthContext } from '../../../contexts/AuthContext'

function UserRoute({children}) {
    let context = React.useContext(AuthContext);
    let user = context.userContext;

    if(!user.id) {
        return <Navigate to="/user/login" />;
    }

    return children;
}

export default UserRoute;