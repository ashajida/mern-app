import { Fragment, useEffect, useState, useContext } from "react";
import AdminDashboard from '../../components/Admin/Dashboard';
import RecipesContext from "../../providers/RecipesContext";

const Dashboard = () => {

    const {recipes, setRecipes} = useContext(RecipesContext);
    const cachedRecipes = localStorage.getItem('recipes');

    useEffect(() => {

        if(cachedRecipes !== null) {

            setRecipes(JSON.parse(cachedRecipes));

        } else {

            fetch('/api/recipes')
            .then(res => res.json())
            .then(res =>  setRecipes(res))
            .catch(err => console.log(err));

        }
       
    },[]);

    return(
        <Fragment>
            <AdminDashboard recipesObj={recipes} />
        </Fragment>
    );
}

export default Dashboard;