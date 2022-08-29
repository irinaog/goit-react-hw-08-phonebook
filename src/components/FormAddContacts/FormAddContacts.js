import { addNewContact } from 'contacts/contactsOperations';
import { useDispatch } from 'react-redux';

import { ThemeProvider } from '@mui/material/styles'
import theme from "themes/themes";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export const FormAddContacts = () => {
  const dispatch = useDispatch();
  
    const hendleSubmit = e => {
      e.preventDefault();
      const name = e.currentTarget.elements.name.value;
      const number = e.currentTarget.elements.number.value;
      dispatch(addNewContact({ name, number }));
      e.currentTarget.reset();
      
    };
    
  return (
            <>
      <form onSubmit={hendleSubmit} style={theme.Form}> 
        <ThemeProvider theme={theme.Input}>
          <TextField
              id="outlined-name"
              label='Name'
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required  
              size='small'
          />
          
           <TextField
              id="outlined-name"
              label='Number'
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              size='small'
            />
        </ThemeProvider>

        <ThemeProvider theme={theme.Button}>
          <Button type="submit" variant='contained'>Add contact</Button>
        </ThemeProvider>  
      </form></>
        )
};

