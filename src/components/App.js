// import { FormAddContacts } from "./FormAddContacts/FormAddContacts";
// import { ContactsList } from "./ContactsList/ContactList";
// import { FilterContacts } from "./FilterContacts/FilterContacts";

import { Route, Routes } from "react-router-dom";
import { RegisterPage } from "page/RegisterPage";
import { SharedLayout } from "./SharedLayout/SharedLayout";
// import { useFetchContactsQuery, useAddContactMutation } from 'Redux/contactsSlice'




export const App = () => {
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
          <Route index element={<RegisterPage />} />
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