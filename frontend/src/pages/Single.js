import { Fragment, useEffect, useState } from "react";
import Post from "../components/Single";

const Single = ({match: { params }}) => {
    const [recipe, setRecipe] = useState();
    const [isLoading, setIsloading] = useState(false);

    useEffect(() => {
       setIsloading(true);
        fetch(`/api/recipes/${params.id}`)
        .then(res => res.json())
        .then(res => {
            setRecipe(res)
            setIsloading(false);
        });

    }, [])

    return(
        <Fragment>
            {recipe && <Post recipeObj={recipe}/>}
        </Fragment>
    );
}

export default Single;