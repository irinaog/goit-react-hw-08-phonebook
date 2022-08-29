import { useDispatch, } from 'react-redux';
import { filterContact } from 'contacts/contactsOperations';
//components mui
import { ThemeProvider } from '@mui/material/styles'
import theme from "themes/themes";
import TextField from '@mui/material/TextField';


export const FilterContacts = () => {
    const dispatch = useDispatch();

    return (<>
        <div style={theme.Form}>
            <ThemeProvider theme={theme.Input}>
                 <TextField
                id="outlined-name"
                label='Find contact by name'
                type="text"
                name="filter"
                onChange={(e) => dispatch(filterContact(e.target.value))}
                size='small'
                />
            </ThemeProvider>
        </div>
    </>
    )
};
