import foods from './foods';
import { configureStore } from '@reduxjs/toolkit';

const Store = configureStore({
  reducer: foods,
});

export default Store;
