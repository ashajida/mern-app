import { Fragment } from "react";
import image from '../../../assets/images/breakfast.jpg';
import { 
    Content, 
    Heading, 
    Title,
    Date,  
    FeaturedRecipesSection,
    FeaturedRecipesContainer, 
    FeaturedRecipesWrapper, 
    FeaturedRecipeWrapper, 
    FeaturedRecipe, 
    Duration,
    Image
    } from "./FeaturedRecipes.elements";


const FeaturedRecipies = () => {
    return(
        <Fragment>
            <FeaturedRecipesSection>
                <FeaturedRecipesContainer>
                    <Heading>Featured Recipieses</Heading>
                    <FeaturedRecipesWrapper>
                        <FeaturedRecipeWrapper big={true}>
                            <FeaturedRecipe>
                                <Image src={image}/>
                                <Content>
                                    <Title>Post One</Title>
                                    <Duration>30mins</Duration>
                                    <Date>21/01/21</Date>
                                </Content>
                            </FeaturedRecipe>
                        </FeaturedRecipeWrapper>
                        <FeaturedRecipeWrapper>
                            <FeaturedRecipe>
                                <Image src={image}/>
                                <Content>
                                    <Title>Post One</Title>
                                    <Duration>30mins</Duration>
                                    <Date>21/01/21</Date>
                                </Content>
                            </FeaturedRecipe>
                        </FeaturedRecipeWrapper>
                        <FeaturedRecipeWrapper>
                            <FeaturedRecipe>
                                <Image src={image}/>
                                <Content>
                                    <Title>Post One</Title>
                                    <Duration>30mins</Duration>
                                    <Date>21/01/21</Date>
                                </Content>
                            </FeaturedRecipe>
                        </FeaturedRecipeWrapper>
                    </FeaturedRecipesWrapper>
                </FeaturedRecipesContainer>
            </FeaturedRecipesSection>
        </Fragment>
    );
}

export default FeaturedRecipies;