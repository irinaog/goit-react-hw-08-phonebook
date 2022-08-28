// import authSelectors from "auth/auth-selectors";
import { ContactsListItem } from "components/ContactsListItem/ContactListItem";
// import { filter } from "contacts/phoneBookActions";
// import { getContacts } from "contacts/contactsOperations";
import { useSelector } from "react-redux";
import css from './ContactsList.module.css';

// import PropTypes from 'prop-types';

export const ContactsList = () => {
    
    // const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts.items);
    const filter = useSelector(state => state.contacts.filter);

    const getFilterContacts = () => {
        return contacts.filter(contact=>contact.name.toLowerCase().includes(filter.toLowerCase()))
    }

 

    return (
        
        <ul className={css.contactList}>
             {filter === '' ? 
                  contacts.length>0 && contacts.map(({ name, number, id }) => (
                <ContactsListItem key={id} name={name} number={number} id={id} />
            )) 
             : 
            
                getFilterContacts().map(({ name, id, number }) =>
                    <ContactsListItem key={id} name={name} number={number} id={id} />
                )
            } 
        
        </ul>
    )
};

// ContactsList.propTupes = {
//     contacts: PropTypes.arrayOf(PropTypes.shape({
//         name: PropTypes.string.isRequired,
//         phone: PropTypes.string.isRequired,
//         id:PropTypes.string.isRequired,}
//     ))
// }
