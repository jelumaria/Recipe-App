import { configureStore } from "@reduxjs/toolkit";
import recipeSlice from "./slices/recipeSlice"; 


const store = configureStore({
  reducer: {
    recipes: recipeSlice, 
    
  },
});

export default store;
