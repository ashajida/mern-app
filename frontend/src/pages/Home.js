import { Fragment, useContext } from "react";
import Hero from '../components/Home/Hero';
import Categories from "../components/Home/Categories";
import LatestPosts from "../components/Home/LatestPosts";
import Banner from "../components/Home/Banner";
import CategoriesContext from "../providers/CategoriesContext";

const Home = () => {
    
    const { categories } = useContext(CategoriesContext);

    return(
        <Fragment>
            <Hero />
            <Categories categoriesObj={categories}/>
            <LatestPosts />
            <Banner />
        </Fragment>
    );
}

export default Home;