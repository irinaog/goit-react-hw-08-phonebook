import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, register, fetchCurrentUser } from "./authOperations";

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isfetchingUser:false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [register.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;     
        },
        [logIn.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;     
        },
        [logOut.fulfilled](state) {
             state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;   
        },
        [fetchCurrentUser.pending](state) {
            state.isfetchingUser = true;  
        },
        [fetchCurrentUser.fulfilled](state, action) {
            state.user = action.payload;
            // console.log('fetchCurrentUser:',action.payload)
            state.isLoggedIn = true;
            state.isfetchingUser = false;
        },
        [fetchCurrentUser.rejected](state) {
            state.isfetchingUser = false;
        }

    }
});

export default authSlice.reducer;