import { Container } from "../../Elements.extend";
import styled from 'styled-components';

export const FeaturedRecipesSection = styled.section``;

export const FeaturedRecipesContainer = styled(Container)``;

export const FeaturedRecipesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 769px) {
        flex-direction: row;
    }
`;

export const FeaturedRecipeWrapper = styled.div`
    width: 100%;
    @media screen and width(min-width: 769px) {
        width: 25%;
        padding: 15px;
        ${({big}) => {
            if(big) {
                return `
                    width: 50%;
                `;
            }
        }}
    }
`;

export const FeaturedRecipe = styled.div`
    position: relative;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
`;

export const Content = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
`;

export const Heading = styled.h2``;

export const Duration = styled.p``;

export const Date = styled.p``;

export const Title = styled.h4``;