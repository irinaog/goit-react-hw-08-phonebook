import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { AppBar } from "components/AppBar";
import { Loader } from "components/Loader/Loader";
import Container from '@mui/material/Container';
import authSelectors from "auth/auth-selectors";
import { useSelector } from "react-redux";


export const SharedLayout = () => {
  const isLogged = useSelector(authSelectors.getIsLoggedIn);

    return (
    <>
      <AppBar/>
        <Container maxWidth='lg'>
          {!isLogged && <div style={{
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform:'translate(-50%, -50%)',
            overflow: 'auto',
    fontFamily: 'Raleway,sans-serif',
    fontWeight: 500,
    fontSize: '32px',
    lineHeight: 1.75,
          }}>Please login or register </div>}
        <Suspense fallback={<Loader/>}>
            <Outlet />
        </Suspense>
      </Container>
    </>
    )
}