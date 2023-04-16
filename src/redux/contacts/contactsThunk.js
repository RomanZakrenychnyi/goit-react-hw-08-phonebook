import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { fetchCurrentUser } from "redux/auth/authThunk";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    try {
      await fetchCurrentUser()
        const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
       console.log(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }) => {
    try {
      const response = await axios.post('/contacts', { name, number });
      return response.data;
    } catch (error) {
     console.log(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id) => {
        try {
            const response = await axios.delete(`/contacts/${id}`);
            return response.data;
        } catch (error) {
         console.log(error);   
        }
    }
);