import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { NoRadiusButton } from '../Elements.extend';

export const PostWrapper = styled.div`
    padding: 0;
    width: 100%;
    margin-bottom: 30px;
    @media screen and (min-width: 769px) {
        width: 50%;
        padding: 15px;
    }
    @media screen and (min-width: 900px) {
        width: 25%;
    }
`;

export const Post = styled.div`
    width: 100%;
    overflow: hidden;
`;

export const Image = styled.img`
    width: 100%;
    height: 250px;
    object-fit: cover;
    object-position: center;
`;

export const Content = styled.div``;;

export const Title = styled(Link)`
    text-decoration: none;
    color: #000;
    font-size: 2rem;
    font-weight: bold;
    display: inline-block;
    transition: color 0.3s;
    line-height: 40px;
    &:hover {
        color: #2ecc71;
    }
`;

export const Duration = styled.p`
    svg {
        margin-right: 10px
    }
`;

export const Text = styled.p`
    color: #232323;
    text-overflow: ellipsis; 
    overflow: hidden;
    white-space: nowrap;
    width: 200px;
    // height: 100px;
`;

export const PostButton = styled(NoRadiusButton)``;

