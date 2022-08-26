import { Suspense } from "react";
import { Outlet } from "react-router-dom";


// import { UserMenu } from "components/UserMenu/UserMenu";
import { AppBar } from "components/AppBar";
// import { Container, Header, Link } from "./SharedLayout.styled"

export const SharedLayout = () => {
    return (
        <div>
            <AppBar/>
            
            <Suspense fallback={<div>Loading ...</div>}>
                <Outlet />
            </Suspense>
        </div>
    )
}