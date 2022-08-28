// import { FormAddContacts } from "./FormAddContacts/FormAddContacts";
// import { ContactsList } from "./ContactsList/ContactList";
// import { FilterContacts } from "./FilterContacts/FilterContacts";

import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector,  } from "react-redux";
import { useEffect,lazy} from "react";

import { SharedLayout } from "./SharedLayout/SharedLayout";
import HomePage from "page/HomePage";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

// import  RegisterPage  from "page/RegisterPage";
// import PhoneBookPage from "page/PhoneBookPage";

// import LoginPage from "page/LogInPage";

import { fetchCurrentUser } from "auth/authOperations";

import authSelectors from "auth/auth-selectors";
const RegisterPage = lazy(() => import('../page/RegisterPage'));
const PhoneBookPage = lazy(() => import('../page/PhoneBookPage'));
const LoginPage = lazy(() => import('../page/LogInPage'));




// import { useFetchContactsQuery, useAddContactMutation } from 'Redux/contactsSlice'




export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // console.log('currentUser')
    dispatch(fetchCurrentUser())
  }, [dispatch])

  const isFetchingCurrentUser = useSelector(authSelectors.getFetchUser);
    return (
    <>
      {!isFetchingCurrentUser && <>
        <Routes>
            
          <Route path='/goit-react-hw-08-phonebook/' element={<SharedLayout/>}>
            <Route index
              element={
                <PublicRoute>
                  <HomePage />
                  </PublicRoute>
              } />

            <Route path='register' 
              element={
                <PublicRoute restricted>
                  <RegisterPage />
                  </PublicRoute>
              } restricted />
           
            <Route path='login'
              element={
                <PublicRoute restricted>
                  <LoginPage />
                  </PublicRoute>
              } />
              
            <Route path='contacts'
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