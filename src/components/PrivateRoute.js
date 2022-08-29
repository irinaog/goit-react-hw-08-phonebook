//если приватный маршрут и пользователь залогинир ренддерим компонент
//=====<Route path='contacts' element={<PhoneBookPage />} />
//*в противном случае редирект 
//=====<Route path='register' element={<RegisterPage />} /> */}
//===== <Route path='login' element={<LoginPage/> } />

import authSelectors from "auth/auth-selectors";
import { useSelector } from "react-redux";
import {  Navigate } from "react-router-dom";



export function PrivateRoute({ children }) {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    
    if (isLoggedIn) {
        return children;
    }
    return <Navigate to='/goit-react-hw-08-phonebook/login' replace />;
};