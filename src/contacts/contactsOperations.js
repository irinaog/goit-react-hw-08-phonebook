import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const getContacts = createAsyncThunk('phonebook/contacts', async ()=> {
    try {
        const { data } = await axios.get('/contacts')
        return data;
    } catch (error) {
        console.log('error with getcontact')
    }
});



export const addNewContact = createAsyncThunk('phonebook/add', async newContact => {
    try {
        const  {data}  = await axios.post('/contacts', newContact);
        return data;
    } catch (error) {
        alert('this contact already exist')
    }
});
