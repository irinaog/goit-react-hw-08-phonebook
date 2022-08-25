import PropTypes from 'prop-types';
import css from './ContactListItem.module.css'

// import { useDispatch, } from 'react-redux';
// import { deleteContact } from 'Redux/phoneBookSlice';
import { useDeleteContactMutation } from 'Redux/contactsSlice';

export const ContactsListItem = ({ name, number, id }) => {
    const [deleteContact, {isLoading:deleting}] = useDeleteContactMutation();
    // const dispatch = useDispatch();
    return (
    
        <li className={css.contactItem} key={id}>
            <p className={css.contactName}>{name} {number} </p>
            <button className={css.deleteBtn} onClick={() => deleteContact(id)}>{ deleting? 'Deleting...':'Delete'}</button>
        </li>
    )
};

ContactsListItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}
