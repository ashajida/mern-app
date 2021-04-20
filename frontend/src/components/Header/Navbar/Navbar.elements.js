import styled from "styled-components";
import { Link } from 'react-router-dom';
import { Container } from '../../Elements.extend';
 
export const  Header = styled.header`
    padding: 20px 0;
   
`;

export const Nav = styled.nav`
    position: relative;
    overflow: hidden;
    display: block;

    @media screen and (min-width: 900px) {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        padding: 0 15px;
    }
`;

export const Links = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 0;
    transform: translateX(-100%);
    width: 100%;
    transition: all 0.5s;
    padding: 0;
    ${({navControl}) => {
        if( navControl) {
            return `
                transform: translateX(0);
                display: block;
                height: 100vh;
                padding: 60px 0;
            `;
        }
    }}

    @media screen and (min-width: 900px) {
        transform: translateX(0);
        flex-direction: row;
        display: flex;
        height: auto;
        padding: 0;
        width: 50%;
        justify-content: flex-end;
    }
`;

export const NavLink = styled(Link)`
    text-decoration: none;
    color: #000;
    font-size: 1rem;
    margin-bottom: 40px;
    display: block;
    transition: color 0.3s;
    font-size: 2rem;
    &:hover {
        color: #fff;
    }

    ${({logo}) => {
        if(logo) {
            return`
                &:hover {
                    color: initial
                }
            `;
        }
    }}

    @media screen and (min-width: 900px) {
        margin: 0;
        margin-right: 20px;
        font-size: 1rem;
        &:last-of-type {
            margin: 0;
        }
    }
`;

export const IconsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 15px;

    @media screen and (min-width: 900px) {
        padding: 0;
        width: auto;
    }
`;

export const MenuBtn = styled.div`
    display: block;
    font-size: 2rem;
    cursor: pointer;
    @media screen and (min-width: 900px) {
        display: none;
    }
`;

export const Logo = styled.div`
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    svg {
        font-size: 2rem;
        display: inline-block;
    }
`;


export const NavContainer = styled(Container)`
    ${Container}
`;

export const NavWrapper = styled.div`
    padding: 15px;
`;

