import { Fragment, useEffect, useContext } from "react";
import AuthContext from "../../providers/AuthContext";
import { useHistory } from "react-router-dom";

const Logout = () => {

    const { setIsAuth } = useContext(AuthContext);
    const history = useHistory();

    useEffect(() => {
        fetch('/api/logout')
        .then(res => res.json())
        .then(res => {
            localStorage.removeItem('isAuth');
            setIsAuth(false);
            history.push('/');
        });
    }, [])
    return(
        <Fragment>
        </Fragment>
    );
}

export default Logout;