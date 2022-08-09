import './CategoryCard.css'
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';
import { deleteSubject } from '../../services/categoryServices';

function CategoryCard({ cat }) {
    let navigate = useNavigate();
    let state = React.useContext(AuthContext);
    let user = state.user;
    let link = cat.name.split(',').map(w => w.trim().toLowerCase()).join('-');
    let buttons;

    function deleteSubjectHandle(id) {
        deleteSubject(id)
            .then(() => {
                navigate(0)
            })
    }

    if (user?.id && user?.isAdmin) {
        buttons = <div>
            <Link to={`/subject/${cat._id}`} className="go-to-button">Continue</Link>
            <button onClick={() => deleteSubjectHandle(cat._id)} className="delete-button">Delete</button>
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