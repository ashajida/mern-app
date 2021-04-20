import styled from "styled-components";
import { Container } from "../../Elements.extend";
import { Link } from "react-router-dom";

export const CategoriesSection = styled.section`
    padding: 60px 0;
    background: #fdfdfd;
`;

export const CategoriesContainer = styled(Container)``;

export const Category = styled.div`
    padding: 0;
    width: 100%;
    height: 200px;
    position: relative;
    margin-bottom: 30px;

    @media screen and (min-width: 769px) {
        width: 50%;
        padding: 15px;       
    }

    @media screen and (min-width: 900px) {
        width: 25%;
        padding: 15px;
        ${({isBig}) => {
            if(isBig) {
                return`
                    width: 50%;
                `;
            }
        }}
    }

`;

export const ImageWrapper = styled.div`
    width: 100%;
    height: 100%;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
`;

export const Title = styled(Link)`
    color: #fff;
    padding: 5px;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: inline-block;
`;

export const CategoriesWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 15px;
    @media screen and (min-width: 769px) {
        flex-direction: row;
        padding: 0px;
    }

`;

export const TitleWrapper = styled.div`
    position: absolute;
    padding: 20px;
    top: 50%;
    background-color: rgba(0,0,0,0.5);
    left: 50%;
    transform: translate(-50%, -50%);
`;