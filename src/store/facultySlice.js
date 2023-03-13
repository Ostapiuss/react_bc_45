import { createSlice } from '@reduxjs/toolkit';

const INITIAL_FACULTY_STATE = {
  department: [
    { id: 1, name: 'Факультет информатики и выычислительной техники' },
    { id: 2, name: 'Факультет искуственого интелекта' },
    { id: 3, name: 'Факультет аналитики' },
  ],
};
const facultySlice = createSlice({
  name: 'faculty',
  initialState: INITIAL_FACULTY_STATE,
  reducers: {
    addFaculty(state, action) {
      state.department.push(action.payload);
    },
    editFaculty(state, action) {
      console.log(action);
    },
  },
});

export const { addFaculty, editFaculty } = facultySlice.actions;
export default facultySlice.reducer;
