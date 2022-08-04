import './ErrorComponent.css';

function ErrorComponent({ message }) {
    console.log(message);

    return (
        <>
            <div className="container">
                <p className="warning">{message}</p>
            </div>
        </>
    )

}

export default ErrorComponent;