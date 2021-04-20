import styled from "styled-components";
import { Container, Button } from "../Elements.extend";


export const PostsSection = styled.section``;

export const PostsContainer = styled(Container)``;

export const PostsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
   
`;

export const Heading = styled.h2`
    padding: 15px;
    margin-bottom: 30px;
    font-size: 2rem;
    text-align: center;
`;


export const LoadMoreButton = styled(Button)``;


export const Wrapper = styled.div`
    padding: 15px;
`;


export const ButtonWrapper = styled.div`
    text-align: center;
    display: none;
    ${({show}) => {
        if(show) {
            return`
                display: block;
            `;
        }
    }}
`;