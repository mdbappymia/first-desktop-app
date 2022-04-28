/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit';

export interface TodoState {
  todos: Array<any>;
}
const initialState: TodoState = {
  todos: [],
};
const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state: TodoState, action) => {
      state.todos = [...state.todos, action.payload];
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
