import { useState, useContext } from "react";
import { GrClose } from "react-icons/gr";
import { BiMenuAltRight } from "react-icons/bi"; 
import { GiCookingPot } from "react-icons/gi";
import { Header, Nav, IconsWrapper, Logo, MenuBtn, Links, NavLink, NavContainer } from "./Navbar.elements";
import AuthContext from "../../../providers/AuthContext";

const NavBar = () => {

    const [NavControl, setNavControl] = useState(false); 
    const { isAuth } = useContext(AuthContext);

    const handleClick = () => {
        setNavControl(!NavControl);
    }

    return (
        <Header>
            <NavContainer>
                <Nav>
                    <IconsWrapper>
                            <NavLink to="/" logo>
                                <Logo><GiCookingPot />Munchies</Logo>
                            </NavLink>
                            <MenuBtn onClick={handleClick}>{ NavControl ?  <GrClose/> : <BiMenuAltRight/> }</MenuBtn>
                        
                    </IconsWrapper>
                    <Links navControl={NavControl}>
                        <NavLink to="/" onClick={handleClick}>Home</NavLink>
                        <NavLink to="/recipes" onClick={handleClick}>Recipes</NavLink>
                        {isAuth && <NavLink to="/dashboard" onClick={handleClick}>Dashboard</NavLink>}
                        {isAuth && <NavLink to='/logout' onClick={handleClick}>Logout</NavLink>}
                   </Links>
                 </Nav>
            </NavContainer>
        </Header>
    );
}


export default NavBar;