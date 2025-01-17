import { createSlice } from '@reduxjs/toolkit';

export const taskSlice = createSlice({
  name: 'task',
  initialState: {
    isOpen: false,
    taskList: {}
  },
  reducers: {
    toggle: (state) => {
      state.isOpen = !state.isOpen;
    },
    addTask: (state, action) => {
      const taskId = Date.now(); // Generate a unique ID for the new task
      state.taskList[taskId] = { // Ensure that taskList is not undefined
        id: taskId,
        text: action.payload.text,
        priority: action.payload.priority,
        important: false,
        completed : false,
      };
    },
    deleteTask: (state, action) => {
      // state.tasks = state.tasks.filter(task => task.id !== action.payload);
      delete state.taskList[action.payload];
    },
  },
});

export const { toggle, addTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;