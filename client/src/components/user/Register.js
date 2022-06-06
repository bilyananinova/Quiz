import './Register.css';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
    let navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        if (e.target.password.value !== e.target.rePassword.value) {
            return;
        }

        if (!e.target.password.value || !e.target.rePassword.value || !e.target.name.value|| !e.target.email.value) {
            return;
        }

        fetch('http://localhost:9000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: e.target.name.value,
                email: e.target.email.value,
                password: e.target.password.value
            })
        })
        .then(() => {
            navigate('/');
        })
    }

    return (
        <>
            <h3>Registration Page</h3>
            <section className="form-wrapper">
                <section className="form-section">
                    <form className="register-form" onSubmit={handleSubmit}>
                        <label htmlFor="register-name">Name <span className="required">*</span></label>
                        <input type="text" className="form-input" id="register-name" name="name" placeholder="Ivan Ivanov" />
                        <label htmlFor="register-email">Email address<span className="required">*</span></label>
                        <input type="email" className="form-input" id="register-email" name="email" placeholder="ivan@mail.bg" />
                        <label htmlFor="register-password">Password <span className="required">*</span></label>
                        <input type="password" className="form-input" id="register-password" name="password" placeholder="******" />
                        <label htmlFor="register-repeat-password">Repeat Password <span className="required">*</span></label>
                        <input type="password" className="form-input" id="register-repeat-password" name="rePassword" placeholder="******" />
                        <button type="submit" className="register-button">Register</button>
                        <p>Already have an account... <Link to="/login">Login</Link> now.</p>
                    </form>
                </section>
            </section>
        </>
    )

}

export default Register;