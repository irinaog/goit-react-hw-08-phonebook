import { NavLink } from "react-router-dom";

export const AuthNav = () => { 
    return (
        <>
           <NavLink  to="/goit-react-hw-08-phonebook/register">Registation</NavLink>
            <NavLink  to="/goit-react-hw-08-phonebook/login">Login</NavLink>
        </>
    )
}