//если маршрут оганиченный, и юзер залогинен, рендерит редирект
//*в противном случае рендерит компонент

import authSelectors from "auth/auth-selectors";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export function PublicRoute({ children, restricted=false, }) {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

    const shouldRedirect = isLoggedIn && restricted;
    
    if (shouldRedirect) {
        return <Navigate to='/goit-react-hw-08-phonebook/contacts' replace/>
    }
    return children;
}