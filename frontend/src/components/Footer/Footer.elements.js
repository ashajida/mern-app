import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "../Elements.extend";

export const FooterSection = styled.footer`
    padding: 60px 0;
`;

export const FooterWrapper = styled.div`
    padding: 15px;
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 900px) {
        flex-direction: row;
        justify-content: space-between;
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

export const FooterNav = styled.div`
    display: flex;
    flex-direction: column;
`;

export const FooterLink = styled(Link)` 
    margin-bottom: 10px;
    text-decoration: none;
    color: #000;
    transition: color 0.3s;
    &:hover {
        color: #fff;
    }
`;

export const Heading = styled.h2`

`;

export const FooterContainer = styled(Container)`
    ${Container}
`;

