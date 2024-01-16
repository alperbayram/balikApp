// src/redux/reducer.ts
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppState} from './types';

const initialState: AppState = {
  items: [],
  favorites: [],
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(
        item => item.bilgi.isim !== action.payload,
      );
    },
  },
});

export const {addToFavorites, removeFromFavorites} = appSlice.actions;
export const appReducer = appSlice.reducer;
