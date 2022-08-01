import './PageNotFound.css';
import { Link } from "react-router-dom";

function PageNotFound() {


    return (
        <>
            <section className="error-wrapper">
                    <h1 className="error-status">404</h1>
                    <h4 className="error-heading">ERROR PAGE</h4>
                    <p className="error-content">Don't worry! Just follow the link bellow to back home page</p>
                    <Link className="error-link" to="/">Home</Link>
            </section>
        </>
    )

}

export default PageNotFound;