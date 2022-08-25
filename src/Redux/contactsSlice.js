import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://62fc9f6b6e617f88de9a7032.mockapi.io/phonebook/' }),
    tagTypes:['Contacts', 'Filter'],
    endpoints: (builder) => ({
        fetchContacts: builder.query({
            query: () => `/contacts`,
            providesTags:['Contacts']
        }),
        addContact: builder.mutation({
            query: (newContact) => ({
                url: '/contacts',
                method: 'POST',
                body: {
                    name: newContact.name,
                    phone:newContact.phone,
                },
            }),
            invalidatesTags:['Contacts'],
        }),
        deleteContact: builder.mutation({
            query: (contactId) => ({
                url: `/contacts/${contactId}`,
                method: 'DELETE',
            }),
            invalidatesTags:['Contacts'],
        }),
    })
});

export const {
    useFetchContactsQuery,
    useDeleteContactMutation,
    useAddContactMutation,
} = contactsApi;