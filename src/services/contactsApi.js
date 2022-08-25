import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export async function fetchContacts() {
    const { data } = await axios.get('/contacts');
    console.log(data);
    return data;
};


// axios.defaults.baseURL = 'https://62fc9f6b6e617f88de9a7032.mockapi.io/phonebook';

// export async function fetchContacts() {
//     const {data} = await axios.get('/contacts');
//     return data;
// };

