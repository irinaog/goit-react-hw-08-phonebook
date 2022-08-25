import { ContactsListItem } from "components/ContactsListItem/ContactListItem";
import css from './ContactsList.module.css';
import { useSelector } from "react-redux";
import PropTypes from 'prop-types';

export const ContactsList = ({ contacts }) => {
    
    const filter = useSelector(state => state.filter);

    const getFilterContacts = () => {
        return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
    };

    return (
        
        <ul className={css.contactList}>
            {filter === '' ?
                contacts.map(({ name, phone, id }) => (
                <ContactsListItem key={id} name={name} number={phone} id={id} />
                ))   : 
            
                getFilterContacts().map(({ name, id, phone }) =>
                    <ContactsListItem key={id} name={name} number={phone} id={id} />
                )
            }
          
        </ul>
    )
};

ContactsList.propTupes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        id:PropTypes.string.isRequired,}
    ))
}
