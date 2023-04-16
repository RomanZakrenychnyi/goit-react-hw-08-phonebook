import { createSlice } from '@reduxjs/toolkit';
import { contactsInitialState } from './contactsInitialState';

import { addContact, deleteContact, fetchContacts, } from './contactsThunk';

const handlePending = state => {
  state.contacts.isLoading = true;
};
const handleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    filterContacts: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(addContact.pending, handlePending)
      .addCase(deleteContact.pending, handlePending)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        const deleteByIndex = state.contacts.items.findIndex(
          (item) => item.id === action.payload.id
        );
        state.contacts.items.splice(deleteByIndex, 1);
      });
  },
});

export const contactsReducer = contactsSlice.reducer;

export const { filterContacts } = contactsSlice.actions;





