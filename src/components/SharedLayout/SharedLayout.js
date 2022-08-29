import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Loader } from "components/Loader/Loader";
import Container from '@mui/material/Container';

// import { UserMenu } from "components/UserMenu/UserMenu";
import { AppBar } from "components/AppBar";
// import { Container, Header, Link } from "./SharedLayout.styled"

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