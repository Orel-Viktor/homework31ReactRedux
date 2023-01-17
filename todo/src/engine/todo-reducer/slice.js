import { createSlice } from "@reduxjs/toolkit";

const todos = createSlice({
  name: "todos",
  initialState: {
    items: [],
    loading: true,
    todosValue: 0,
  },
  reducers: {
    setItems: {
      prepare: (payload, meta) => ({ payload, meta }),
      reducer: (state, action) => {
        const { payload } = action;
        state.items = payload;
        state.todosValue = action.payload.length;
        console.log(state.items)
      }
    }
    ,
    setLoading: (state, action) => {
      const { payload } = action;
      state.loading = payload;
    },
  },
});

export const { setItems, setLoading } = todos.actions;
export const todoReducer = todos.reducer;
