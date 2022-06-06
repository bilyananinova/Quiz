import './Home.css';
import React from 'react';

import CategoryCard from './CategoryCard';

function Home() {
    let [categories, setCategories] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:9000/')
            .then(res => res.json())
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