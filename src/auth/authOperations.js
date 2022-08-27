import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { unwrapResult } from '@reduxjs/toolkit'

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

export const register = createAsyncThunk('auth/register', async credentials => {
    try {
        const { data } = await axios.post('/users/signup', credentials)
        token.set(data.token);
        return data;
    } catch (error) {
        console.log('ooooops, is not register')
        //error
    }
});

export const logIn = createAsyncThunk('auth/login', async credentials => {
    try {
        const { data } = await axios.post('/users/login', credentials)
        token.set(data.token);
        return data;
    } catch (error) {
        console.log('ooooops, is not login')
        //error
    }
});

export const logOut = createAsyncThunk('auth/logout', async () => {
    try {
        await axios.post('/users/logout');
        token.unset();
    } catch (error) {
        console.log('you dont logout')
    }
});

export const fetchCurrentUser = createAsyncThunk('phonebook/refresh', async (_, thunkApi) => {
    
    const state = thunkApi.getState();
    const persistedToken = state.auth.token;
    // console.log('token',persistedToken)

    if (persistedToken === null) {
        // console.log('token is absent')
        return thunkApi.rejectWithValue();
    }

    token.set(persistedToken)
    try {
        const { data } = await axios.get('/users/current');
        // console.log('persisted get')
        return data;
    } catch (error) {
        console.log('error in fetchCurrentUser')
    }
})

 