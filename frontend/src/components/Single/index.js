import { Fragment } from "react";
import { PostSection, ImageTextWrapper, ImageText, Wrapper, PostContainer, PostWrapper, Heading, ImageWrapper, Content,  Image, Text } from "./Post.elements";
import moment from 'moment';
import { capitalize } from "../../helpers/capitalize";

const Post = ({recipeObj}) => {

    const date = moment(recipeObj.createdAt);
    
    return (
        <Fragment>
            <PostSection>
                <PostContainer>
                    <Wrapper>
                        <PostWrapper>
                            <ImageTextWrapper>
                                <ImageWrapper>
                                    <Image src={`/uploads/${recipeObj.image}`} />
                                </ImageWrapper>
                                <ImageText>
                                        <Heading>{capitalize(recipeObj.title)}</Heading>
                                        <Text>{date.format('dddd DD MMM YYYY').toString()}</Text>
                                </ImageText>
                            </ImageTextWrapper>
                            <Content>
                                <Text>{recipeObj.body}</Text>
                            </Content>
                        </PostWrapper>
                    </Wrapper>
                </PostContainer>
            </PostSection>
        </Fragment>
    );
}

export default Post;