import PropTypes from 'prop-types';
import css from './FormAddContact.module.css';

export const FormAddContacts = ({onSubmit}) => {
  
    const hendleSubmit = e => {
      e.preventDefault();
      const name = e.currentTarget.elements.name.value;
      const phone = e.currentTarget.elements.number.value;
      onSubmit({name, phone})
      // console.log(contacts)
      e.currentTarget.reset();
      
    };
    
  return (
            <>
            <form  className = {css.formAddContact} onSubmit={hendleSubmit}> 
          <label className={css.formInputTitle}>
            Name 
            <input
            className={css.formInput}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required  
                  />
          </label>
           <label className={css.formInputTitle}>
            Number
            <input
            className={css.formInput}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />
          </label>
          
          <button  className ={css.addBtn} type="submit">Add contact</button>
        </form></>
        )
    
};

FormAddContacts.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
