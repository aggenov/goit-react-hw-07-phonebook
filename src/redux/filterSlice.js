import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  // Имя слайса
  name: 'filter',
  // Начальное состояние редюсера слайса
  initialState: '',
  // Объект редюсеров
  reducers: {
    changeFilter(state, action) {
      return action.payload;
    },
  },
});

// Генераторы экшенов
export const { changeFilter } = filterSlice.actions;
// Редюсер слайса
export const filterReducer = filterSlice.reducer;
