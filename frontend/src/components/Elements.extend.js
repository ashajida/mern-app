import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Container = styled.div`
    width: 100%;
    max-width: 1140px;
    margin: 0 auto;
    padding: 15px;
    @media screen and (min-width: 769px) {
        width: 90%;
    }
`;

export const Section = styled.section`
    
`;

export const Button = styled(Link)`
    padding: 10px 15px;
    text-decoration: none;
    border: 1px solid transparent;
    border-radius: 15px;
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
    background: #2ecc71;
    display: inline-block;
    transition: background 0.3s;
    cursor: pointer;
    &:hover {
        background: #27ac5f;
    }
`;

export const FormButton = styled.button`
    padding: 10px 15px;
    text-decoration: none;
    border: 1px solid transparent;
    border-radius: 15px;
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
    background: #2ecc71;
    display: block;
    width: 100%;
    transition: background 0.3s;
    cursor: pointer;
    &:hover {
        background: #27ac5f;
    }
`;


export const Input = styled.input`
    width: 100%;
    outline: none;
    display: block;
    padding: 10px 15px;
    margin-bottom: 30px;
    font-family: inherit;
    border: 1px solid transparent;
    border-radius: 10px;
`;

export const Textarea = styled.textarea`
    width: 100%;
    height: 200px;
    outline: none;
    display: block;
    padding: 20px 15px;
    margin-bottom: 30px;
    font-family: inherit;
    border: 1px solid transparent;
    border-radius: 10px;
    resize: none;
`;

export const InputMessage = styled.p`
    margin-bottom: 10px;
    color: #ff0000;
    text-align: start;
`;

export const NoRadiusButton = styled(Link)`
    padding: 10px 20px;
    display: inline-block;
    background: #2ecc71;
    color: #fff;
    text-decoration: none;
    font-weight: 200;
    font-size: 0.8rem;
    text-transform: uppercase;
    transition: background 0.3s;
    &:hover {
        background: #27ac5f;
    }
`;