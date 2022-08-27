import { FormAddContacts } from "components/FormAddContacts/FormAddContacts";
// import { FilterContacts } from "components/FilterContacts/FilterContacts";
import { ContactsList } from "components/ContactsList/ContactList";
import { getContacts } from "contacts/contactsOperations";
import { useDispatch, useSelector  } from "react-redux";
import { useEffect } from "react";

// import { useFetchContactsQuery, useAddContactMutation } from 'contacts/contactsSlice';
// import { useState } from "react";



export default function PhoneBookPage() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  // const token = useSelector(state=>state.auth.token)

  useEffect(() => {dispatch(getContacts())}, [dispatch]);
  
  
  // const formSubmitHandler = (newData) => {
  //   if (data && data.find(contact => (newData.name === contact.name))){
  //     alert(newData.name + ' is already in contacts' )
  //   }
  //   else {
  //     addContact({name:newData.name,  phone:newData.phone})
  //   }
  // };
    return (
        <>
        <h1 className="headlineApp">Phonebook</h1>
        <FormAddContacts  />
        {/* <FilterContacts/> */}

        {contacts && contacts.length>0 &&
          <>
        <h2 className="contactListTitle">Contacts</h2>
        <ContactsList  />
        </>
            }
        </>
    )
};