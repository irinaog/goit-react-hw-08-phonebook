import { NavLink } from "react-router-dom";

export const Navigation = () => { 
    return (
        <>
            <NavLink  to="/goit-react-hw-08-phonebook/">Home</NavLink>
                <NavLink  to="/goit-react-hw-08-phonebook/contacts">Phonebook</NavLink>
        </>
    )
}