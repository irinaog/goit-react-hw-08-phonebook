import { createSlice } from '@reduxjs/toolkit';
import { getContacts, addNewContact , deleteContact} from './contactsOperations';

const initialState = {
    items: [],
    filter: '',
};

const contactSlice = createSlice({
    name: 'phonebook',
    initialState,
    extraReducers: {
        [getContacts.fulfilled](state, action) {
            // console.log(action.payload)
            state.items = action.payload
        },
        [addNewContact.rejected](state, action) {
            alert('existing contact')
        },
        [addNewContact.fulfilled](state, action) {
            state.items.push(action.payload)
        },
        [deleteContact.fulfilled](state, action) {
        state.items = state.items.filter(contact=>contact.id!==action.payload)
        }
    }
});

// export const { addContact, deleteContact, filter } = contactSlice.actions;
export default contactSlice.reducer;


// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// export const contactsApi = createApi({
//     reducerPath: 'contactsApi',
//     baseQuery: fetchBaseQuery({
//         baseUrl: 'https://connections-api.herokuapp.com',
//     //     prepareHeaders: (headers, { getState }) => {
//     //          const token = getState().auth.token

//     // // If we have a token set in state, let's assume that we should be passing it.
//     // if (token) {
//     //   headers.set('authorization', `Bearer ${token}`)
//     // }

//     // return headers
//     //     }  
//     }),
//     tagTypes:['Contacts', 'Filter'],
//     endpoints: (builder) => ({
//         fetchContacts: builder.query({
//             query: () => `/contacts`,
//             providesTags: ['Contacts']
//         }),
//         addContact: builder.mutation({
//             query: (newContact) => ({
//                 url: '/contacts',
//                 method: 'POST',
//                 body: {
//                     name: newContact.name,
//                     phone:newContact.phone,
//                 },
//             }),
//             invalidatesTags:['Contacts'],
//         }),
//         deleteContact: builder.mutation({
//             query: (contactId) => ({
//                 url: `/contacts/${contactId}`,
//                 method: 'DELETE',
//             }),
//             invalidatesTags:['Contacts'],
//         }),
//     })
// });

// export const {
//     useFetchContactsQuery,
//     useDeleteContactMutation,
//     useAddContactMutation,
// } = contactsApi;