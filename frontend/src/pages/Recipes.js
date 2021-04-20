import { Fragment, useContext } from "react";
import Posts from "../components/Posts";
import RecipesContext from "../providers/RecipesContext";

const Recipes = () => {

    const { recipes } = useContext(RecipesContext);

    return(
        <Fragment>
            <Posts recipes={recipes} title='All Recipes' show/>
        </Fragment>
    );
}

export default Recipes;