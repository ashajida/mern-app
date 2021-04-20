import styled from "styled-components";
import {Button} from '../../Elements.extend'; 

export const HeroSection = styled.section`
    position: relative;
`;

export const ImageWrapper = styled.div`
    width: 100%;
    height: 100vh;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: right;
    @media screen and (min-width: 769px) {
        object-position: center;
    }

`;

export const Content = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 40px 15px;
    text-align: center;
    color: #fff;
    width: 100%;
    max-width: 900px;
    background: rgba(0,0,0,0.5);
`;

export const Heading = styled.h1`
    margin-bottom: 30px;
    text-transform: uppercase;
    max-width: 60%;
    font-size: 2.1rem;
    margin: 0 auto;
`;

export const Text = styled.p`
    margin-bottom: 30px;
`;

export const ButtonCta = styled(Button)``;