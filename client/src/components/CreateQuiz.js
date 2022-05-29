import './CreateQuiz.css';

function CreateQuiz() {

    function createNewCategory(e) {
        e.preventDefault();

        fetch('http://localhost:9000/create-quiz', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                category: e.target.newCategory.value
            })
        })
            .then(() => {
                e.target.newCategory.value = ''
            })
    }

    return (
        <>
            <div className="create-category">
                <h5>Create New Category</h5>
                <form className="create-category-form" onSubmit={createNewCategory}>
                    <input type="text" id="create-category" name="newCategory" />
                    <button type="submit" className="create-category-button">Add</button>
                </form>
            </div>

            <div className="create-quiz">

            </div>
        </>
    )

}

export default CreateQuiz;