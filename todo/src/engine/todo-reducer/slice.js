import { createSlice } from "@reduxjs/toolkit";

const todos = createSlice({
  name: "todos",
  initialState: {
    items: [],
    loading: true,
    todosValue: 0,
    // disabledButton: true,
  },
  reducers: {
    setItems: (state, action) => {
      const { payload } = action;
      state.items = payload;
      state.todosValue = action.payload.length;
    },
    setLoading: (state, action) => {
      const { payload } = action;
      state.loading = payload;
    },
    // setDisabledButton: (state) => {
    //   state.disabledButton = false
    // }
  },
});

export const { setItems, setLoading } = todos.actions;
export const todoReducer = todos.reducer;
