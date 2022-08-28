import css from './FilterContacts.module.css';
import { useDispatch, } from 'react-redux';
import { filterContact } from 'contacts/contactsOperations';
// import { filter } from 'contacts/phoneBookActions';


export const FilterContacts = () => {
   
    const dispatch = useDispatch();

    return (<>
        <div className={css.filterContainer}>
        <label htmlFor='filter' className={css.filterTitle}> Find contacts by name </label>
        <input
                id='filter'
                className={css.filterInput}
                type="text"
                name="filter"
                onChange={(e) => dispatch(filterContact(e.target.value))}
            ></input>
        </div>
    </>
    )
};
