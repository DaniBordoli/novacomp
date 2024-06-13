import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface Task {
  id: number;
  description: string;
}

interface TasksState {
  tasks: Task[];
}

const initialState: TasksState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      const newTask: Task = {
        id: state.tasks.length + 1,
        description: action.payload,
      };
      state.tasks.push(newTask);
    },
  },
});

export const {addTask} = tasksSlice.actions;
export default tasksSlice.reducer;
