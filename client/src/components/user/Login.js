import './Login.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Login() {

    return (
        <>
            <h3>Login Page</h3>
            <div className="form-wrapper">
                <section className="form-section">
                    <form className="login-form">
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