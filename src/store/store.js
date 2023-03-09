import { configureStore } from '@reduxjs/toolkit';
import facultyReducer from './facultySlice';

export default configureStore({
  reducer: {
    faculty: facultyReducer,
  },
  devTools: true,
});

