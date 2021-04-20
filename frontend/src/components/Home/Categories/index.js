import { 
    Category,
    CategoriesContainer,
    CategoriesSection,
    TitleWrapper,
    Title,
    ImageWrapper,
    Image,
    CategoriesWrapper
} from "./Categeries.elements";

const Categories = ({ categoriesObj }) => {
    return(
        <CategoriesSection>
            <CategoriesContainer>
                <CategoriesWrapper>
                    {
                        categoriesObj.map((category) => {
                            return(
                                <Category isBig={category.isBig ? true : false} key={category.id}>
                                    <ImageWrapper>
                                        <Image src={`/uploads/${category.image}`} />
                                    </ImageWrapper>
                                    <TitleWrapper>
                                     <Title to={`/recipes/category/${category.id}`}>{category.name}</Title>
                                    </TitleWrapper>
                                </Category> 
                            );
                        })
                    }
                </CategoriesWrapper>
            </CategoriesContainer>
        </CategoriesSection>
    );
}
export default Categories;