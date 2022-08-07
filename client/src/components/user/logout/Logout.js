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
                getUser();
                navigate('/');
            })
    }, []);

}

export default Logout;