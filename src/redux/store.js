import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './usersReducer';
import booksReducer from './booksReducer';

const store = configureStore(
  {
    reducer: {
      user: usersReducer,
      books: booksReducer,
    },
  },
);

export default store;
