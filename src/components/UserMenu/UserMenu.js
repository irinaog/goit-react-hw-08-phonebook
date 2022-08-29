import authSelectors from "auth/auth-selectors";
import { logOut } from "auth/authOperations";
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components';
import { ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import theme from "themes/themes";
import LogoutIcon from '@mui/icons-material/Logout';

export const UserMenu = () => {
    const dispatch = useDispatch();
    const email = useSelector(authSelectors.getUserEmail)

    return (
        <>
            <Email>{email}</Email>
            <ThemeProvider theme={theme.ButtonLogOut}>
                <Button variant="outlined" type="button" onClick={() => dispatch(logOut())}>
                    <LogoutIcon/>Logout</Button>
        </ThemeProvider>
            </>
    )
};


const Email = styled.p`
font-family: Raleway,sans-serif; 
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 1.75;
`

// export const Link = styled(NavLink)`
//  padding: 8px 16px;
//   border-radius: 4px;
//   font-family: Raleway,sans-serif; 
//     font-weight: 500;
//     font-size: 0.875rem;
//     line-height: 1.75;
//   text-transform:uppercase;
//   text-decoration: none;
//   color:#000000;
//   &.active {
//     color: white;
// `