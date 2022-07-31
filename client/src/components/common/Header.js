import './Header.css';
import { Link } from 'react-router-dom';
import React from 'react';

import UserNav from './UserNav';
import AdminNav from './AdminNav';
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

                <nav className="site-nav">
                    <Link to="/" >Home</Link>
                    <Link to="/newest" >Newest</Link>
                    <ul>

                        {user.id
                            ?
                            <>
                                {
                                    user.isAdmin
                                        ?
                                        <AdminNav />
                                        :
                                        <UserNav />
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
            </header>
        </>
    )
}

export default Header;