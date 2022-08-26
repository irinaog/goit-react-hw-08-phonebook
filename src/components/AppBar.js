import { UserMenu } from "components/UserMenu/UserMenu";
import { Navigation } from "./UserMenu/Navigation";
import { AuthNav } from "./UserMenu/AuthNav";
import authSelectors from "auth/auth-selectors";
import { useSelector } from "react-redux";
// import { Container, Header, Link } from "./SharedLayout.styled"

export const AppBar = () => {
const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
    return (
            <header style={{backgroundColor: "lightblue", display:"flex", flexWrap:"nowrap", width:"100%", justifyContent:"space-between"}}>

            <Navigation />
            {isLoggedIn?<UserMenu/>:<AuthNav/>}
            </header>
    )
}