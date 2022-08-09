import React from 'react';
import { useNavigate } from 'react-router-dom';

import { logout } from '../../../services/userServices';
import { AuthContext } from '../../../contexts/AuthContext';

function Logout() {
    let navigate = useNavigate();
    let { getUser } = React.useContext(AuthContext);

    React.useEffect(() => {
        logout()
            .then(() => {
                localStorage.removeItem('user._id');
                localStorage.removeItem('user.name');
                localStorage.removeItem('user.email');
                localStorage.clear();
                getUser();
                navigate('/');
            })
    }, []);

}

export default Logout;