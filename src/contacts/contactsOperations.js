import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";



axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const getContacts = createAsyncThunk('phonebook/contacts', async ()=> {
    try {
        const { data } = await axios.get('/contacts');
        // console.log('just get')
        return data
    } catch (error) {
        console.log('error with getcontact')
    }
});

export const addNewContact = createAsyncThunk('phonebook/add', async (newContact, thunkApi) => {
    const state = thunkApi.getState();
    const contacts = state.contacts.items;
    console.log(contacts)
    const name = contacts.find(contact => contact.name === newContact.name)
    if (name) {
        return thunkApi.rejectWithValue(newContact.name)
    }
    try {
        const  {data}  = await axios.post('/contacts', newContact);
        return data;
    } catch (error) {
        //error
    }
    
});

export const filterContact = createAsyncThunk('phonebook/filter', async (findContact, thunkApi) => {
    
    if (findContact === '') {
        return thunkApi.rejectWithValue()
    }
      return findContact  
    
});

export const deleteContact = createAsyncThunk('phonebook/delete', async (contactId) => {
    // console.log(contactId) 
    try {
        await axios.delete(`/contacts/${contactId}`, contactId);
        return contactId;
    } catch (error) {
        //error
         console.log('error deleteContact')
    }
})


