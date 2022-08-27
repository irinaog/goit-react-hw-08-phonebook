// import { FormAddContacts } from "./FormAddContacts/FormAddContacts";
// import { ContactsList } from "./ContactsList/ContactList";
// import { FilterContacts } from "./FilterContacts/FilterContacts";

import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { SharedLayout } from "./SharedLayout/SharedLayout";
import  RegisterPage  from "page/RegisterPage";
import PhoneBookPage from "page/PhoneBookPage";
import HomePage from "page/HomePage";
import  LoginPage  from "page/LogInPage";
import { fetchCurrentUser } from "auth/authOperations";
// import { useFetchContactsQuery, useAddContactMutation } from 'Redux/contactsSlice'




export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser())
  }, [dispatch])

  // const { data } = useFetchContactsQuery();
  // const  [addContact]  = useAddContactMutation();
  
  // const formSubmitHandler = (newData) => {
  //   if (data.find(contact => (newData.name === contact.name))){
  //     alert(newData.name + ' is already in contacts' )
  //   }
  //   else {
  //     addContact({name:newData.name,  phone:newData.phone})
  //   }
  // };

    return (
      <>
        <Routes>
          <Route path='/goit-react-hw-08-phonebook/' element={<SharedLayout/>}>
            <Route index element={<HomePage />} />
            <Route path='contacts' element={<PhoneBookPage />} />
            <Route path='register' element={<RegisterPage />} />
            <Route path='login' element={<LoginPage/> } />
          </Route>
        </Routes>
        {/* <h1 className="headlineApp">Phonebook</h1>
        <FormAddContacts  onSubmit={formSubmitHandler}/>
        <FilterContacts/>

        {data && data.length>0 &&
          <>
        <h2 className="contactListTitle">Contacts</h2>
        <ContactsList contacts ={data} />
        </>
        } */}
      </>
    );
  
};