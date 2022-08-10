import './CategoryCard.css'
import React from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';

function CategoryCard({ cat, handleDialog }) {
    let state = React.useContext(AuthContext);
    let user = state.user;
    let link = cat.name.split(',').map(w => w.trim().toLowerCase()).join('-');
    let buttons;

    if (user?.id && user?.isAdmin) {
        buttons = <div>
            <Link to={`/subject/${cat._id}`} className="go-to-button">Continue</Link>
            <button onClick={() => handleDialog(true, 'Are you sure you want to delete this subject?', cat._id)} className="delete-button">Delete</button>
        </div>
    } else if (user?.id && !user?.isAdmin) {
        buttons = <div>
            <Link to={`/subject/${cat._id}`} className="go-to-button">Continue</Link>
        </div>
    } else if (!user?.id && !user?.isAdmin) {
        buttons = null;
    }

    return (
        <>
            <div className="category-card">
                <h3>{cat.name}</h3>
                {buttons}
            </div>
        </>
    )
}

export default CategoryCard;