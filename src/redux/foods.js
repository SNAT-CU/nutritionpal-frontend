import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  foods: {
    BREAKFAST: [],
    LUNCH: [],
    SNACKS: [],
    DINNER: [],
  },
  loading: false,
  error: null,
};

// Create the slice
const foods = createSlice({
  name: 'foods',
  initialState,
  reducers: {
    // Actions
    fetchFoodsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchFoodsSuccess: (state, action) => {
      state.foods = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchFoodsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addFood: (state, action) => {
      const {section, food} = action.payload;
      state.foods[section].push(food);
    },
    removeFood: (state, action) => {
      state.foods = state.foods.filter(
        (food) => food.id !== action.payload,
      );
    },
  },
});

export const {
  fetchFoodsStart,
  fetchFoodsSuccess,
  fetchFoodsFailure,
  addFood,
  removeFood,
} = foods.actions;

export default foods.reducer;
