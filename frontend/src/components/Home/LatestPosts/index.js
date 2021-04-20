import { Fragment, useContext } from "react";
import { LatestPostsSection, LatestPostsContainer, PostsWrapper, Heading } from "./LatestPosts.elements";
import Post from "../../Post";
import RecipesContext from "../../../providers/RecipesContext";

const LatestPosts = () => {

    const { recipes } = useContext(RecipesContext);

    return(
        <Fragment>
            <LatestPostsSection>
                <LatestPostsContainer>
                    <Heading>Latest Recipe</Heading>
                    <PostsWrapper>
                        {
                            recipes.map(recipe => {
                                if(recipe.featured) {
                                    return(<Post recipeObj={recipe} key={ recipe.id } />)
                                }
                            })
                        }
                    </PostsWrapper>
                </LatestPostsContainer>
            </LatestPostsSection>
        </Fragment>
    );
}


export default LatestPosts;