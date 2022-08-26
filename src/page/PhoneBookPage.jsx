import { FormAddContacts } from "components/FormAddContacts/FormAddContacts";
// import { FilterContacts } from "components/FilterContacts/FilterContacts";
// import { ContactsList } from "components/ContactsList/ContactList";
import { getContacts } from "contacts/contactsOperations";
import { useDispatch } from "react-redux";

// import { useFetchContactsQuery, useAddContactMutation } from 'contacts/contactsSlice';
// import { useState } from "react";



export default function PhoneBookPage() {
  const dispatch = useDispatch();
  
 
  dispatch(getContacts())
  // const contacts = dispatch(getContacts());
  // console.log(contacts)
  //  console.log()
  // getContacts();
  // const [token, setToken] = useState();
  // const contacts = getContacts;
  // console.log(contacts)
  // const { data } = useFetchContactsQuery();
  // token = data.token;
  // console.log(data.token)
  // console.log(data)
  // const  [addContact]  = useAddContactMutation();
  
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
{/* 
        {data && data.length>0 &&
          <>
        <h2 className="contactListTitle">Contacts</h2> */}
        {/* <ContactsList  /> */}
        {/* </>
            } */}
        </>
    )
};