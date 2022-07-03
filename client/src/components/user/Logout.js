import React from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
    let navigate = useNavigate();
    React.useEffect(() => {

        fetch('http://localhost:9000/user/logout', {
            method: 'GET',
            credentials: 'include'
        })
            .then(() => {
                navigate('/');
            });
    }, [])

}

export default Logout;