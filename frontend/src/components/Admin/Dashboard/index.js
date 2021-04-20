import { Fragment, useEffect, useContext } from "react";
import {
    Section,
    DashboardContainer as Container,
    Wrapper,
    Heading,
    ButtonLink,
    ButtonWrapper
} from './Dashboard.elements';
import RecipeTable from './RecipeTable';

const AdminDashboard = ({recipesObj}) => {
   
    return(
        <Fragment>
            <Section>
                <Container>
                    <Wrapper>
                        <Heading>Dashboard</Heading>
                       <ButtonWrapper>
                            <ButtonLink to='/recipes/add'>Add new recipe</ButtonLink>
                            <ButtonLink to='/category/add'>Add new category</ButtonLink>
                       </ButtonWrapper>
                        <RecipeTable recipesCollection = {recipesObj}/>
                    </Wrapper>
                </Container>
            </Section>
        </Fragment>
    );
}

export default AdminDashboard;