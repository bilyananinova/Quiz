import './Header.css';
import { Link } from 'react-router-dom';

function Header() {

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
                    <li><Link to="/create-quiz" >Create Quiz</Link></li>
                    <li><Link to="/user/login">Login</Link></li>
                    <li><Link to="/user/register" >Register</Link></li>
                    <li><Link to="/user/logout">Logout</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Header;