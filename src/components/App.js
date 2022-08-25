import { FormAddContacts } from "./FormAddContacts/FormAddContacts";
import { ContactsList } from "./ContactsList/ContactList";
import { FilterContacts } from "./FilterContacts/FilterContacts";

import { useFetchContactsQuery, useAddContactMutation } from 'Redux/contactsSlice'




export const App = () => {
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
    );
  
};