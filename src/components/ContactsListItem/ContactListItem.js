import PropTypes from 'prop-types';
import { useDispatch, } from 'react-redux';

import { deleteContact } from 'contacts/contactsOperations';
import { ThemeProvider } from '@mui/material/styles';

import theme from 'themes/themes';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import Button from '@mui/material/Button'

export const ContactsListItem = ({ name, number, id }) => {
    const dispatch = useDispatch();
    return (
    <ThemeProvider theme={theme.ItemsContent}>
        <ListItem key={id} alignItems='flex-start'> 
            <PersonIcon/>
            <ListItemText primary={name} secondary={number} />
            
            <ThemeProvider theme={theme.Button}>
             <Button variant='outlined' onClick={() => dispatch(deleteContact(id))}>Delete</Button>
            </ThemeProvider>
        </ListItem>
    </ThemeProvider>
    )
};

ContactsListItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}
