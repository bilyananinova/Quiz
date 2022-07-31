import './CategoryCard.css'
import React from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';

function CategoryCard({ cat }) {
    let context = React.useContext(AuthContext);
    let user = context.userContext;
    let link = cat.name.split(',').map(w => w.trim().toLowerCase()).join('-');

    return (
        <>
            <div className="category-card">
                <h3>{cat.name}</h3>
                {user.id
                    ?
                    <Link to={`/subject/${cat._id}`} className="go-to-button">Go To Quizzes</Link>
                    :
                    null
                }
            </div>
        </>
    )
}

export default CategoryCard;