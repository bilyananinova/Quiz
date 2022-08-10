import './ErrorComponent.css';

function ErrorComponent({ message }) {

    return (
        <>
            <div className="container">
                <p className="warning">{message}</p>
            </div>
        </>
    )

}

export default ErrorComponent;