import './Login.css';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { login } from '../../../services/userServices';
import { AuthContext } from '../../../contexts/AuthContext';

import ErrorComponent from '../../error/ErrorComponent';

function Login() {
    let navigate = useNavigate();
    let { getUser } = React.useContext(AuthContext);
    let [error, setError] = React.useState('');

    function handleSubmit(e) {
        e.preventDefault();

        login(e.target.email.value, e.target.password.value)
            .then(response => {

                if (response.ok === false) {
                    return response.json().then(err => { throw new Error(err) });
                } else {
                    return response.json();
                }
            })
            .then(user => {
                if (user) {
                    localStorage.setItem('user._id', user._id);
                    localStorage.setItem('user.name', user.name);
                    localStorage.setItem('user.email', user.email);
                    getUser(user._id, user.name, user.email);
                    navigate('/');
                }
            })
            .catch((err) => {
                // console.log(err.message);
                setError(err.message);
            })

    }
    return (
        <>
            <h3>Login Page</h3>
            <div className="form-wrapper">
                <section className="form-section">
                    {error ? <ErrorComponent message={error} /> : null}
                    <form className="login-form" onSubmit={handleSubmit}>
                        <label htmlFor="login-email">Email address<span className="required">*</span></label>
                        <input type="text" className="form-input" id="login-email" name="email" placeholder="ivan@mail.bg" />
                        <label htmlFor="login-password">Password<span className="required">*</span></label>
                        <input type="password" className="form-input" id="login-password" name="password" placeholder="******" />
                        <button type="submit" className="login-button">Login</button>
                        <p>Don't have an account? <Link to="/user/register">Register</Link> now.</p>
                    </form>
                </section>
            </div>
        </>
    )

}

export default Login;