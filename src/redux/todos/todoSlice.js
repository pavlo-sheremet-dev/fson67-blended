import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: { items: [], selectedItem: null },
  reducers: {
    addTodo: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter(todo => todo.id !== action.payload);
    },
    toggleEditForm: (state, action) => {
      state.selectedItem = action.payload ? action.payload : null;
    },
    editTodo: (state, action) => {
      state.items = state.items.map(todo => {
        return todo.id !== action.payload.id ? todo : action.payload;
      });
    },
  },
});
export const { addTodo, deleteTodo, toggleEditForm, editTodo } =
  todoSlice.actions;
