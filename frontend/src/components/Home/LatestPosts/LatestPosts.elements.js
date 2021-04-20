import styled from "styled-components";
import { Container } from "../../Elements.extend";

export const LatestPostsSection = styled.section`
    padding: 60px 0;
`;

export const LatestPostsContainer = styled(Container)``;

export const PostsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    @media screen and (min-width: 769px) {
        flex-direction: row;
        flex-wrap: wrap;
    }
    
`;

export const Heading = styled.h2`
    margin-bottom: 60px;
    padding: 0 15px;
`;
