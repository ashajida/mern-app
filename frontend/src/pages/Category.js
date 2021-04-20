import { Fragment, useEffect, useState } from "react";
import Posts from "../components/Posts";

const Category = ({match: { params }}) => {

    const [recipes, setRecipes] = useState([]);
    const [heading, setHeading] = useState('');
    const cachedCategories = localStorage.getItem('categories');

    useEffect(() => {

        if(cachedCategories !== null) {
            const cachedRecipes = JSON.parse(cachedCategories).filter((category) => category.id == params.id);
            setRecipes(cachedRecipes[0].Posts);
            setHeading(cachedRecipes[0].name);
        } else {
            fetch(`/api/recipes/categories/${params.id}`)
            .then(response => response.json())
            .then(response => {
                setRecipes(response.Posts);
                setHeading(response.name);
            })
            .catch(err => console.log(err));
        }

    }, []);

    return(
        <Fragment>
            <Posts recipes={recipes} title={heading} />
        </Fragment>
    );
}

export default Category;