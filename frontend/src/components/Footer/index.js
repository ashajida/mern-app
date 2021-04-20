import { Fragment } from "react";
import { FooterSection, FooterWrapper, Logo, FooterLink, Heading, FooterContainer, FooterNav } from "./Footer.elements";
import { GiCookingPot } from "react-icons/gi";



const Footer = () => {
    return(
        <Fragment>
            <FooterSection>
                <FooterContainer>
                    <FooterWrapper>
                        <FooterLink to="/">
                            <Logo><GiCookingPot />Munchies</Logo>
                        </FooterLink>
                        <FooterNav>
                            <Heading>Explore</Heading>
                            <FooterLink to="/">Home</FooterLink>
                            <FooterLink to="/recipes">Recipes</FooterLink>
                        </FooterNav>
                        <FooterNav>
                            <Heading>Contact Us</Heading>
                            <FooterLink to="/">Contact</FooterLink>
                            <FooterLink to="/">FAQ</FooterLink>
                        </FooterNav>
                    </FooterWrapper>
                </FooterContainer>
            </FooterSection>
        </Fragment>
    );
}


export default Footer;