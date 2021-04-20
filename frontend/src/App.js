import './App.css';
import NavBar from './components/Header/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Home from './pages/Home';
import Footer from './components/Footer';
import Recipes from './pages/Recipes';
import Single from './pages/Single';
import AddRecipe from './pages/admin/AddRecipe';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Dashboard from './pages/admin/Dashboard';
import EditRecipe from './pages/EditRecipe';
import ProtectedRoute from './Routes/ProtectedRoute';
import { useState, useEffect, useContext } from 'react';
import AuthContext from './providers/AuthContext';
import RecipesContext from './providers/RecipesContext';
import CategoriesContext from './providers/CategoriesContext';
import AddCategory from './pages/admin/AddCategory';
import Logout from './pages/auth/Logout';
import Category from './pages/Category';

function App() {

    const [isAuth, setIsAuth] = useState(false);
    const [recipes, setRecipes] = useState([]);
    const [categories, setCategories] = useState([]);

    const cachedIsAuth = localStorage.getItem('isAuth');

    // Refresh token
    const refreshToken = () => {
      setInterval(() => {
        fetch('/api/refresh', {
          method: 'post'
        })
        .then()
        .then(() => {
            setIsAuth(true);
            if(cachedIsAuth) localStorage.setItem('isAuth', true);
            console.log('refreshing token.....');
          
        });
      }, (3000 * 1000))
    }

    useEffect(() => {

      const cachedRecipes = localStorage.getItem('recipes') && localStorage.getItem('recipes');
      const cachedCategories = localStorage.getItem('categories') && localStorage.getItem('categories');
     
      // check is recipes are cached
      if(cachedRecipes !== null) {
        setRecipes(JSON.parse(cachedRecipes));
      } else {
        fetch('/api/recipes')
        .then(res => res.json())
        .then(res => {
            setRecipes(res);
            localStorage.setItem('recipes', JSON.stringify(res));
        });
      }
     
      // check if categories are cached
      if(cachedCategories !== null) {
        setCategories(JSON.parse(cachedCategories));
      } else {
        fetch('/api/categories')
        .then((res) => res.json())
        .then(res => {
            setCategories(res);
            localStorage.setItem('categories', JSON.stringify(res));
        });
      }

      refreshToken();
     
    }, []);

   

  return (

    <Router>
       <GlobalStyle />
       <CategoriesContext.Provider value={{categories, setCategories}}>
       <RecipesContext.Provider value={{recipes, setRecipes}}>
       <AuthContext.Provider value={{isAuth, setIsAuth}}>
        <div className="App">
        <NavBar />
       <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/recipes" component={Recipes} />
          <Route path="/recipes/category/:id" component={Category} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/register" component={Register} />
          <ProtectedRoute exact path="/dashboard" component={Dashboard} />
          <ProtectedRoute  path="/recipes/add" component={AddRecipe}  />
          <ProtectedRoute path="/recipes/:id/edit" component={EditRecipe} />
          <Route path="/recipes/:id" component={Single} />
          <ProtectedRoute  path="/category/add" component={AddCategory} />
      </Switch>
      <Footer />
      </div>
      </AuthContext.Provider>
      </RecipesContext.Provider>
      </CategoriesContext.Provider>
    </Router>
  );
}

export default App;
