import { Fragment, useState } from "react";
import Post  from "../Post";
import { PostsSection, PostsContainer , PostsWrapper, Heading, Wrapper, LoadMoreButton, ButtonWrapper} from "./Posts.elements";


const Posts = ({ recipes, title, show }) => {

    const [visible, setVisible] = useState(4);
    
    const loadMoreRecipes = (e) => {

        e.preventDefault();
    
        setVisible((prevValue) => prevValue + 4);

    }

    return (
        <Fragment>
            <PostsSection>
                <PostsContainer>
                    <Wrapper>
                        <Heading>{title}</Heading>
                        {
                            (recipes.length == 0) ? <Heading>No Recipes Found</Heading> :  <PostsWrapper>
                            {
                                recipes.slice(0, visible).map(recipe => {
                                    return(
                                        <Post recipeObj={recipe} key={recipe.id}/>
                                    )
                                })
                            }
                        </PostsWrapper>
                        }
                        <ButtonWrapper show={show}>
                            <LoadMoreButton onClick={loadMoreRecipes}>Load more</LoadMoreButton>
                        </ButtonWrapper>
                    </Wrapper>
                </PostsContainer>
            </PostsSection>
        </Fragment>
    );
}

export default Posts;