import './Register.css';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { register } from '../../services/userServices';
import { AuthContext } from '../../contexts/AuthContext';

import ErrorComponent from '../error/ErrorComponent';

function Register() {
    let navigate = useNavigate();
    let { getUser } = React.useContext(AuthContext);
    let [error, setError] = React.useState('');

    function handleSubmit(e) {
        e.preventDefault();

        register(e.target.name.value, e.target.email.value, e.target.password.value, e.target.rePassword.value)
            .then(response => {
                if (response.ok === false) {
                    return response.json().then(err => { throw new Error(err) })
                } else {
                    return response.json();
                }
            })
            .then((user) => {
                if (user) {
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
            <h3>Registration Page</h3>
            <section className="form-wrapper">
                <section className="form-section">
                    {error ? <ErrorComponent message={error} /> : null}
                    <form className="register-form" onSubmit={handleSubmit}>
                        <label htmlFor="register-name">Name <span className="required">*</span></label>
                        <input type="text" className="form-input" id="register-name" name="name" placeholder="Ivan Ivanov" />
                        <label htmlFor="register-email">Email address<span className="required">*</span></label>
                        <input type="email" className="form-input" id="register-email" name="email" placeholder="ivan@mail.bg" />
                        <label htmlFor="register-password">Password<span className="required">*</span></label>
                        <input type="password" className="form-input" id="register-password" name="password" placeholder="******" />
                        <label htmlFor="register-repeat-password">Repeat Password <span className="required">*</span></label>
                        <input type="password" className="form-input" id="register-repeat-password" name="rePassword" placeholder="******" />
                        <button type="submit" className="register-button">Register</button>
                        <p>Already have an account... <Link to="/user/login">Login</Link> now.</p>
                    </form>
                </section>
            </section>
        </>
    )

}

export default Register;