import './Header.css';

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
                        <li><a href="/" >Home</a></li>
                        <li><a href="/login">Login</a></li>
                        <li><a href="/register" >Register</a></li>
                        <li><a href="/logout">Logout</a></li>
                    </ul>
                </nav>
            </>
        )
    }

export default Header;