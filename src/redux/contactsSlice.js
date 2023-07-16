import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

const contactsSlice = createSlice({
  // Имя слайса
  name: 'contacts',
  // Начальное состояние редюсера слайса
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  // Объект редюсеров
  extraReducers: {
    //  fetchContacts
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.items = action.payload;
      state.isLoading = false;
    },
    [fetchContacts.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },

    // addContacts
    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.items.push(action.payload);
      state.isLoading = false;
    },
    [addContact.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },

    //  deleteContact
    [deleteContact.pending](state) {
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.items = state.items.filter(item => item.id !== action.payload.id);
      state.isLoading = false;
    },
    [deleteContact.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

// Редюсер слайса
export const contactsReducer = contactsSlice.reducer;
