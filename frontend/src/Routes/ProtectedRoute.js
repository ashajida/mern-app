import { Route, Redirect } from 'react-router-dom';
import { Fragment, useState, useEffect, useContext } from 'react';
import AuthContext from '../providers/AuthContext';

const ProtectedRoute = (props) => {

    const { component: Component,  ...rest } = props;
    const { isAuth, setIsAuth } = useContext(AuthContext);
    const [verifyToken, setVerifyToken] = useState(false);
    const cachedIsAuth = localStorage.getItem('isAuth');
 
    useEffect(() => {

        fetch('/api/verify-token')
        .then(res => {
            if(res.status !== 200){
                setIsAuth(false);
                setVerifyToken(false);
                if(cachedIsAuth !== null) localStorage.removeItem('isAuth');
            }  else {
                setIsAuth(true);
                setVerifyToken(true);
            }
            
        })
        .catch(error => console.log(error));
    
        return () => {
            setVerifyToken(false);
        }

    }, []);

     
    if(!isAuth && !cachedIsAuth) {
        return(<Redirect to="/login" />);
    }

    return(
        <Fragment>
            { 
                <Route {...rest} render={(props) => {
                    return( verifyToken  &&
                        <Component {...props} />
                        )
                }} />
            }
        </Fragment>
    );
}

export default ProtectedRoute;