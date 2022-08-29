import { UserMenu } from "components/UserMenu/UserMenu";
import { Navigation } from "./UserMenu/Navigation";
import { AuthNav } from "./UserMenu/AuthNav";
import authSelectors from "auth/auth-selectors";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
// import Link from '@mui/material/Link';
import styled from 'styled-components';


// import { Container, Header, Link } from "./SharedLayout.styled"

export const AppBar = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
    return (
        <header style={{
            maxWidth:'100%',
            padding:'0 16px',
            backgroundColor: "#6997D3	",
            display: "flex",
            flexWrap: "nowrap",
            // width: "100%",
            justifyContent: "space-between",
            alignItems: 'center',
        }}>

            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    )
};



export const Link = styled(NavLink)`
 padding: 8px 16px;
  border-radius: 4px;
  font-family: Raleway,sans-serif; 
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.75;
  text-transform:uppercase;
  text-decoration: none;
  color:#000000;
  &.active {
    color: white;
`