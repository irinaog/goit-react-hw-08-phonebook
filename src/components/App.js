// import { FormAddContacts } from "./FormAddContacts/FormAddContacts";
// import { ContactsList } from "./ContactsList/ContactList";
// import { FilterContacts } from "./FilterContacts/FilterContacts";

import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector,  } from "react-redux";
import { useEffect,lazy} from "react";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { fetchCurrentUser } from "auth/authOperations";
import authSelectors from "auth/auth-selectors";

const RegisterPage = lazy(() => import('../page/RegisterPage'));
const PhoneBookPage = lazy(() => import('../page/PhoneBookPage'));
const LoginPage = lazy(() => import('../page/LogInPage'));

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser())
  }, [dispatch])

  const isFetchingCurrentUser = useSelector(authSelectors.getFetchUser);
    return (
    <>
        {!isFetchingCurrentUser && <>
        
        <Routes>
          <Route path='/goit-react-hw-08-phonebook/' element={<SharedLayout/>}>
          
            <Route path='/goit-react-hw-08-phonebook/register' 
              element={
                <PublicRoute restricted>
                  <RegisterPage />
                  </PublicRoute>
              } restricted />
           
            <Route path='/goit-react-hw-08-phonebook/login'
              element={
                <PublicRoute restricted>
                  <LoginPage />
                  </PublicRoute>
              } />
              
            <Route path='/goit-react-hw-08-phonebook/contacts'
              element={<PrivateRoute >
                <PhoneBookPage/>
              </PrivateRoute>} >
              </Route>
              </Route>
          </Routes>
      </>}
    </> 
    );
};