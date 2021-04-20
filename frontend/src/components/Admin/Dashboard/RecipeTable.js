import { Fragment, useContext } from "react";
import { Table, Row, THeading, Data, TBody , THead, ButtonLink} from "./Dashboard.elements";
import RecipesContext from "../../../providers/RecipesContext";
import { capitalize } from "../../../helpers/capitalize";

const RecipeTable = ({recipesCollection}) => {

    const {setRecipes} = useContext(RecipesContext);

    // deletes recipes from database
    const handleDelete = (e, id) => {

        e.preventDefault();

        fetch(`/api/recipes/${id}/delete`, {
            method: 'post'
        })
        .then(res => res.json())
        .then(res => {
            setRecipes(res);
            localStorage.setItem('recipes', JSON.stringify(res));
        });
    }

    return(
        <Fragment>
            <Table>
                <THead>
                    <Row>
                        <THeading>#</THeading>
                        <THeading>Title</THeading>
                        <THeading>Image</THeading>
                        <THeading>Date</THeading>
                        <THeading>Modify</THeading>
                    </Row>
                </THead>
                <TBody>
                  
                        {
                            recipesCollection.map(recipe => {
                                const date = new Date(recipe.createdAt);
                                return(
                                    <Fragment>
                                        <Row key={recipe.id}>
                                            <Data data-label='ID'>{recipe.id}</Data>
                                            <Data data-label='Title'>{capitalize(recipe.title)}</Data>
                                            <Data data-label='Image'><img alt={ capitalize(recipe.title) } src={`/uploads/${recipe.image}`} /></Data>
                                            <Data data-label='Date'>{date.getDate() + '/' + date.getMonth() + '/' + date.getUTCFullYear()}</Data>
                                            <Data data-label='Modify'>
                                                <ButtonLink to={`/recipes/${recipe.id}/edit`} left>Edit</ButtonLink>
                                                <ButtonLink to="/" onClick={(e) => handleDelete(e, recipe.id)} red>Delete</ButtonLink>
                                            </Data>
                                        </Row>
                                    </Fragment>
                                )
                            })
                        }
                </TBody>
            </Table>
        </Fragment>
    );
            
}

export default RecipeTable;