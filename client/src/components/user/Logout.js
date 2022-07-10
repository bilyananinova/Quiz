import React from 'react';
import { useNavigate } from 'react-router-dom';

import { logout } from '../../services/userServices';

function Logout() {
    let navigate = useNavigate();

    React.useEffect(() => {
        logout()
            .then(() => {
                navigate('/');
            });
    }, []);

}

export default Logout;