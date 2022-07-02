import './Login.css';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    let navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        if (!e.target.password.value || !e.target.email.value) {
            return;
        }

        fetch('http://localhost:9000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Credentials": true,
            },
            body: JSON.stringify({
                name: e.target.name.value,
                email: e.target.email.value,
                password: e.target.password.value
            }),
            credentials: "include",
        })
            .then(() => {
                navigate('/');
            });
    }

    return (
        <>
            <h3>Login Page</h3>
            <div className="form-wrapper">
                <section className="form-section">
                    <form className="login-form" onSubmit={handleSubmit}>
                        <label htmlFor="login-email">Email address<span className="required">*</span></label>
                        <input type="email" className="form-input" id="login-email" name="email" placeholder="ivan@mail.bg" />
                        <label htmlFor="login-password">Password <span className="required">*</span></label>
                        <input type="password" className="form-input" id="login-password" name="password" placeholder="******" />
                        <button type="submit" className="login-button">Login</button>
                        <p>Don't have an account? <Link to="/register">Register</Link> now.</p>
                    </form>
                </section>
            </div>
        </>
    )

}

export default Login;