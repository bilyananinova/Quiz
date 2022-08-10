import './Home.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { getAllSubjects, deleteSubject } from '../../services/categoryServices';

import CategoryCard from './CategoryCard';
import Dialog from '../common/dialog/Dialog';

function Home() {
    let navigate = useNavigate();
    let [categories, setCategories] = React.useState([]);
    let [isLoading, setIsLoading] = React.useState(false);
    let [message, setMessage] = React.useState('');
    let [subId, setSubId] = React.useState('');

    React.useEffect(() => {
        getAllSubjects()
            .then(result => {
                setCategories(result);
            })
    }, [])

    function handleDialog(isLoading, message, id) {
        setIsLoading(isLoading);
        setMessage(message);
        setSubId(id);
    }

    function isDelete(choose) {

        if (choose) {
            setIsLoading(false);
            setMessage('');
            deleteSubjectHandle(subId);
        } else {
            setIsLoading(false);
            setMessage('');
            setSubId('');
        }

    }

    function deleteSubjectHandle(id) {
        deleteSubject(id)
            .then(() => {
                navigate(0);
            })
    }

    return (
        <>
            {isLoading && <Dialog message={message} isDelete={isDelete} />}

            <section className="categories-section">
                {
                    categories
                        .map((c, i) =>
                            <CategoryCard
                                key={c._id}
                                cat={c}
                                handleDialog={handleDialog}
                            />)
                }
            </section>
        </>
    )

}

export default Home;