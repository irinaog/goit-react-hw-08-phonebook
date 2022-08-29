import { createSlice } from '@reduxjs/toolkit';
import { getContacts, addNewContact , deleteContact, filterContact } from './contactsOperations';

const initialState = {
    items: [],
    filter: '',
};

const contactSlice = createSlice({
    name: 'phonebook',
    initialState,
    extraReducers: {
        [getContacts.pending](state) {
            state.items = []
        },
        [getContacts.fulfilled](state, action) {
            state.items = action.payload
        },
        [addNewContact.rejected](state, action) {
            alert(`${action.payload} is already in contacts`)
        },
        [addNewContact.fulfilled](state, action) {
            state.items.push(action.payload)
        },
        [filterContact.fulfilled](state, action) {
            state.filter = action.payload;
        },
        [filterContact.rejected](state, action) {
            state.filter = '';
        },
        [deleteContact.fulfilled](state, action) {
        state.items = state.items.filter(contact=>contact.id!==action.payload)
        }
    }
});
export default contactSlice.reducer;


