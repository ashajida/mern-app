import { Fragment } from "react";
import { PostWrapper, Post as PostContent, Image, PostButton, Content, Duration, Title, Text } from "./Post.element";
import { BsClock } from "react-icons/bs";
import { capitalize } from "../../helpers/capitalize";


const Post = ({recipeObj}) => {

    return(
        <Fragment>
            <PostWrapper>
                <PostContent className="post">
                    <Image alt={capitalize(recipeObj.title)} className="postImage" src={`/uploads/${recipeObj.image}`} />
                    <Content>
                        <Duration><BsClock />30 Minutes</Duration>
                        <Title to={`/recipes/${recipeObj.id} `}>
                            {capitalize(recipeObj.title)} 
                        </Title>
                        <Text>
                        {recipeObj.body} 
                        </Text>
                        <PostButton to={`/recipes/${recipeObj.id} `}>Read more</PostButton>
                    </Content>
                </PostContent>
            </PostWrapper>
        </Fragment>
    );
}

export default Post;