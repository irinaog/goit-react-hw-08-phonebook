import axios from "axios";
import { createAsyncThunk,  } from "@reduxjs/toolkit";



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



export const addNewContact = createAsyncThunk('phonebook/add', async newContact => {
      try {
        const  {data}  = await axios.post('/contacts', newContact);
        return data;
    } catch (error) {
        //error
    }
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


