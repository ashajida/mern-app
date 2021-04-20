import image from '../../../assets/images/hero.jpg'
import { HeroSection, ImageWrapper, Image, Content, Heading, ButtonCta, Text } from './Hero.element';
const Hero = () => {
    return (
        <HeroSection>
            <ImageWrapper>
                <Image src={image}/>
            </ImageWrapper>
            <Content>
                <Heading>Welcome to my blog</Heading>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</Text>
                <ButtonCta to="/">Sign Up</ButtonCta>
            </Content>
        </HeroSection>
    )
}

export default Hero;