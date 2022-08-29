import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { AppBar } from "components/AppBar";
import { Loader } from "components/Loader/Loader";
import Container from '@mui/material/Container';


export const SharedLayout = () => {
    return (
    <>
      <AppBar/>
      <Container maxWidth='lg'>
        <Suspense fallback={<Loader/>}>
            <Outlet />
        </Suspense>
      </Container>
    </>
    )
}