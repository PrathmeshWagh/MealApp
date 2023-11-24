import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from './favorites'
import favorites from "./favorites";

export const store = configureStore({
  reducer: {
    favoriteMeals: favoritesReducer,

  }

})
