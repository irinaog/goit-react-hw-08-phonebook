import css from './FilterContacts.module.css';
import { useDispatch,  } from 'react-redux';
import { filter } from 'Redux/phoneBookActions';


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
                onChange={(e)=>dispatch(filter(e.currentTarget.value))}
            ></input>
        </div>
    </>
    )
};
