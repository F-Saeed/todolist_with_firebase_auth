import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    tasksFetched: (state, action) => action.payload,
  },
});

export default tasksSlice.reducer;
export const { tasksFetched } = tasksSlice.actions;
