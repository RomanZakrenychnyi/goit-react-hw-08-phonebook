import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registerUser = createAsyncThunk(
  'auth/register',
  async (credential) => {
    try {
      const { data } = await axios.post('/users/signup', credential);
      token.set(data.token);
      return data;
    } catch (error) {
      return console.log('error');
    }
  }
);

export const logInUser = createAsyncThunk(
  'auth/login',
  async (credential) => {
    try {
      const { data } = await axios.post('/users/login', credential);
      token.set(data.token);
      return data;
    } catch (error) {
      return console.log('error');
    }
  }
);

export const logOutUser = createAsyncThunk(
  'auth/logout',
  async () => {
    try {
      await axios.post('/users/logout');
      token.unset();
    } catch (error) {
      return console.log('error');
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    token.set(state.auth.token)
    try {
      const { data } = await axios.get('/users/current');
      console.log("data:", data)
      
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);