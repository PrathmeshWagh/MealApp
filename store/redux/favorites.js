import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: 'favorites', // It Can Be Any Name
  initialState: {
    ids: []

  },
  reducers: {
    addFavorite: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeFavorite: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1) // We Remove The Selected Item From Array
    }
  }

})


export const addFavorite = favoritesSlice.actions.addFavorite;
export const removeFavorite = favoritesSlice.actions.removeFavorite;

export default favoritesSlice.reducer; 