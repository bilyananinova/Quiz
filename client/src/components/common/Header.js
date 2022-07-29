import './Header.css';
import { Link } from 'react-router-dom';
import React from 'react';
import { AuthContext } from '../../contexts/AuthContext';

function Header() {
    let context = React.useContext(AuthContext);
    let user = context.userContext;

    return (
        <>
            <header className="site-header">
                <a href="/">
                    <h1>Quiz App</h1>
                    <p>React</p>
                </a>
            </header>

            <nav className="site-nav">
                <ul>
                    <li><Link to="/" >Home</Link></li>

                    {user.id
                        ?
                        <>
                            {
                                user.isAdmin
                                    ?
                                    <>
                                        <li><Link to="/create-quiz" >Create Quiz</Link></li>
                                        <li><Link to="/" >Welcome, {user.name} !</Link></li>
                                        <li><Link to="/user/logout">Logout</Link></li>
                                    </>
                                    :
                                    <>
                                        <li><Link to="/" >Welcome, {user.name} !</Link></li>
                                        <li><Link to="/user/logout">Logout</Link></li>
                                    </>
                            }
                        </>
                        :
                        <>
                            <li><Link to="/user/login">Login</Link></li>
                            <li><Link to="/user/register" >Register</Link></li>
                        </>
                    }

                </ul>
            </nav>
        </>
    )
}

export default Header;