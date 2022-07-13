import './CategoryCard.css'
import { Link } from 'react-router-dom';

function CategoryCard({ cat }) {
    let link = cat.name.split(',').map(w => w.trim().toLowerCase()).join('-');

    return (
        <>
            <div className="category-card">
                <h3>{cat.name}</h3>
                <Link to={`/subject/${cat._id}`} className="go-to-button">Go To Quizzes</Link>
            </div>
        </>
    )
}

export default CategoryCard;