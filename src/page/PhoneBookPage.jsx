import { FormAddContacts } from "components/FormAddContacts/FormAddContacts";
import { FilterContacts } from "components/FilterContacts/FilterContacts";
import { ContactsList } from "components/ContactsList/ContactList";

import { useFetchContactsQuery, useAddContactMutation } from 'Redux/contactsSlice';

export default function PhoneBookPage() {
      const { data } = useFetchContactsQuery();
  const  [addContact]  = useAddContactMutation();
  
  const formSubmitHandler = (newData) => {
    if (data.find(contact => (newData.name === contact.name))){
      alert(newData.name + ' is already in contacts' )
    }
    else {
      addContact({name:newData.name,  phone:newData.phone})
    }
  };
    return (
        <>
        <h1 className="headlineApp">Phonebook</h1>
        <FormAddContacts  onSubmit={formSubmitHandler}/>
        <FilterContacts/>

        {data && data.length>0 &&
          <>
        <h2 className="contactListTitle">Contacts</h2>
        <ContactsList contacts ={data} />
        </>
            }
        </>
    )
};