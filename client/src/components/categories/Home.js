import './Home.css';
import React from 'react';

import CategoryCard from './CategoryCard';
import { getAllSubjects } from '../../services/quizServices';

function Home() {
    let [categories, setCategories] = React.useState([]);

    React.useEffect(() => {
        getAllSubjects()
            .then(result => {
                setCategories(result);
            })
    }, [])

    return (
        <>
            <section className="categories-section">
                {
                    categories
                        .map((c, i) =>
                            <CategoryCard
                                key={c._id}
                                cat={c} />)
                }
            </section>
        </>
    )

}

export default Home;