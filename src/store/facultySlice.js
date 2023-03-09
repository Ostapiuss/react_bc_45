import { createSlice } from '@reduxjs/toolkit';

const INITIAL_FACULTY_STATE = {
  department: [
    { name: 'Факультет информатики и выычислительной техники' },
    { name: 'Факультет искуственого интелекта' },
    { name: 'Факультет аналитики' },
  ],
};
const facultySlice = createSlice({
  name: 'faculty',
  initialState: INITIAL_FACULTY_STATE,
  reducers: {
    addFaculty(state, action) {
      console.log(action);
      state.department.push(action.payload);
    },
  },
});

export const { addFaculty } = facultySlice.actions;
export default facultySlice.reducer;
