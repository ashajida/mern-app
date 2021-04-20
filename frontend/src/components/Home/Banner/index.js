import { Fragment } from "react";
import { BannerSection, BannerContainer, BannerWrapper, Heading, Text, Button } from "./Banner.elements";

const Banner = () => {
    return(
        <Fragment>
            <BannerSection>
                <BannerContainer>
                    <BannerWrapper>
                        <Heading>Food Sales</Heading>
                        <Text>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</Text>
                        <Button to="/">Learn more</Button>
                    </BannerWrapper>
                </BannerContainer>
            </BannerSection>
        </Fragment>
    );
}

export default Banner;