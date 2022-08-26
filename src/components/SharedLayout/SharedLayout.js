import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

import { UserMenu } from "components/UserMenu/UserMenu";
// import { Container, Header, Link } from "./SharedLayout.styled"

export const SharedLayout = () => {
    return (
        <div>
            <header>
                <NavLink  to="/goit-react-hw-08-phonebook/">Home</NavLink>
                <NavLink to="/goit-react-hw-08-phonebook/phonebook">Phonebook</NavLink>

                <NavLink  to="/goit-react-hw-08-phonebook/register">Registation</NavLink>
        <NavLink  to="/goit-react-hw-08-phonebook/login">Login</NavLink>
                <UserMenu/>
            </header>
            
            <Suspense fallback={<div>Loading ...</div>}>
                <Outlet />
            </Suspense>
        </div>
    )
}