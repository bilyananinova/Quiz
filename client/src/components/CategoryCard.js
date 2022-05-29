import './CategoryCard.css'
import { Link } from 'react-router-dom';

function CategoryCard({ cat }) {
    let link = cat.name.split(',').map(w => w.trim().toLowerCase()).join('-')

    return (
        <>
            <div className="category-card">
                <h3>{cat.name}</h3>
                <Link to={`/category/${link}`} className="go-to-button">Go To Category</Link>
            </div>
        </>
    )
}

export default CategoryCard;