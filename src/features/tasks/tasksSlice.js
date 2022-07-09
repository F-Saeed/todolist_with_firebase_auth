import { createSlice } from '@reduxjs/toolkit';

const initialState = { taskList: [] };

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    tasksFetched: (state, action) => {
      state.taskList = action.payload;
    },
  },
});

export default tasksSlice.reducer;
export const { tasksFetched } = tasksSlice.actions;
