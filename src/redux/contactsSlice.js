import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  // Имя слайса
  name: 'contacts',
  // Начальное состояние редюсера слайса
  initialState: [],
  // Объект редюсеров
  reducers: {
    addContacts(state, action) {
      state.push(action.payload);
    },
    deleteContacts(state, action) {
      return state.filter(({ id }) => id !== action.payload);
    },
  },
});

// Генераторы экшенов
export const { addContacts, deleteContacts } = contactsSlice.actions;
// Редюсер слайса
export const contactsReducer = contactsSlice.reducer;
