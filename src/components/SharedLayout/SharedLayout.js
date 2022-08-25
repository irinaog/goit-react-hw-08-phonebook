import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import { NavLink } from "react-router-dom"
// import { Container, Header, Link } from "./SharedLayout.styled"

export const SharedLayout = () => {
    return (
        <div>
            <header>
                <NavLink  to="/goit-react-hw-08-phonebook/">Home</NavLink>
                <NavLink to="/goit-react-hw-08-phonebook/phonebook">Phonebook</NavLink>
            </header>
            <Suspense fallback={<div>Loading ...</div>}>
                <Outlet />
            </Suspense>
        </div>
    )
}