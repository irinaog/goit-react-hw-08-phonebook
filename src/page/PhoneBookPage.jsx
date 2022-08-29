import { FormAddContacts } from "components/FormAddContacts/FormAddContacts";
import { FilterContacts } from "components/FilterContacts/FilterContacts";
import { ContactsList } from "components/ContactsList/ContactList";
import { getContacts } from "contacts/contactsOperations";
import { useDispatch, useSelector  } from "react-redux";
import { useEffect } from "react";

export default function PhoneBookPage() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  useEffect(() => {
    dispatch(getContacts())
  }, [dispatch]);
  

    return (
        <>
        <h1 className="headlineApp">Phonebook</h1>
        <FormAddContacts  />
        {contacts && contacts.length>0 &&
          <>
          <FilterContacts/>
          <h2 className="contactListTitle">Contacts</h2>
        <ContactsList  />
        </>
            }
        </>
    )
};