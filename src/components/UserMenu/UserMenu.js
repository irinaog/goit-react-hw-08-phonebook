import authSelectors from "auth/auth-selectors"
import { logOut } from "auth/authOperations";
import { useSelector, useDispatch } from "react-redux"

export const UserMenu = () => { 
    const dispatch = useDispatch();
    const email = useSelector(authSelectors.getUserEmail)

    return (
        <>
            <p>{email}</p>
            <button type="button" onClick={()=>dispatch(logOut())}>Logout</button>
        </>
    )
}