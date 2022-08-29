import { ContactsListItem } from "components/ContactsListItem/ContactListItem";
import { useSelector } from "react-redux";
import { ThemeProvider } from '@mui/material/styles';
import List from '@mui/material/List';
import theme from "themes/themes";

export const ContactsList = () => {
    const contacts = useSelector(state => state.contacts.items);
    const filter = useSelector(state => state.contacts.filter);

    const getFilterContacts = () => {
        return contacts.filter(contact=>contact.name.toLowerCase().includes(filter.toLowerCase()))
    }

 

    return (
        <ThemeProvider theme={theme.ContactList}>
        <List >
            {filter === '' ? 
                  contacts.length>0 && contacts.map(({ name, number, id }) => (
                <ContactsListItem key={id} name={name} number={number} id={id} />
            )) 
             :
                getFilterContacts().map(({ name, id, number }) =>
                    <ContactsListItem key={id} name={name} number={number} id={id} />
                )
            } 
            </List>
        </ThemeProvider>
    )
};

