import { createSlice } from '@reduxjs/toolkit';

export const taskSlice = createSlice({
  name: 'task',
  initialState: {
    isOpen: false,
    taskList: {},
    isTaskInputBoxOpen:true
  },
  reducers: {
    toggle: (state) => {
      state.isOpen = !state.isOpen;
    },
    taskInputBox:(state)=>{
       state.isTaskInputBoxOpen = !state.isTaskInputBoxOpen;
    },
    addTask: (state, action) => {
      const taskId = Date.now(); // Generate a unique ID for the new task
      state.taskList[taskId] = { // Ensure that taskList is not undefined
        id: taskId,
        text: action.payload.text,
        priority: action.payload.priority,
        important: false,
        completed: false,
      };
    },
    deleteTask: (state, action) => {
      delete state.taskList[action.payload];
    },
    toggleTaskCompletion: (state, action) => {
      const taskId = action.payload;
      state.taskList[taskId].completed = !state.taskList[taskId].completed;
    },
    toggleTaskImpportant: (state, action) => {
      const taskId = action.payload;
      state.taskList[taskId].important = !state.taskList[taskId].important;
    },
    setSelectedTaskId: (state, action) => {
      state.taskId = action.payload;
    },

  },
});

export const { toggle, addTask, deleteTask, toggleTaskCompletion, toggleTaskImpportant,taskInputBox, setSelectedTaskId } = taskSlice.actions;

export default taskSlice.reducer;