import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchRecipes = createAsyncThunk(
  'recipe/fetchRecipes',
  async () => {
    const response = await fetch('https://dummyjson.com/recipes');
    const data = await response.json();
    return data.recipes;
    
  }
);


export const fetchRecipeDetails = createAsyncThunk(
  'recipe/fetchRecipeDetails',
  async (id) => {
    const response = await fetch(`https://dummyjson.com/recipes/${id}`);
    const data = await response.json();
    return data; 
    
  }
);

const recipeSlice = createSlice({
  name: 'recipe',
  initialState: {
    allRecipes: [],
    selectedRecipe: null,
    loading: false,
    error: null,
  },
  reducers: {

    searchRecipe: (state, action) => {
      const query = action.payload.toLowerCase();
      state.allRecipes = state.allRecipes.filter(recipe =>
        recipe.name.toLowerCase().includes(query)
      );
    },
    

    searchRecipesByCuisine: (state, action) => {
      const cuisine = action.payload.toLowerCase();
      state.allRecipes = state.allRecipes.filter(recipe =>
        recipe.cuisine.toLowerCase().includes(cuisine)
      );
    },
  },
  extraReducers: (builder) => {
    builder

    .addCase(fetchRecipes.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.loading = false;
        state.allRecipes = action.payload;
        
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; 
        
      })


      .addCase(fetchRecipeDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRecipeDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedRecipe = action.payload;
        

      })
      .addCase(fetchRecipeDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; 
        
      });
  },
});


export const { searchRecipe, searchRecipesByCuisine } = recipeSlice.actions;


export default recipeSlice.reducer;
