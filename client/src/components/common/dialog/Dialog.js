import './Dialog.css';

function Dialog({ message, isDelete }) {

    return (
        <>
            <div className="dialog-container">
                <div className="dialog-content" onClick={(e) => e.stopPropagation()}>
                    <h3>{message}</h3>
                    <div className="dialog-btns">
                        <button onClick={() => isDelete(true)} className="confirm-btn">Confirm</button>
                        <button onClick={() => isDelete(false)} className="cancel-btn">Cancel</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dialog;