import { createSlice } from "@reduxjs/toolkit"

const todos = createSlice({
    name: "todos",
    initialState: {
        items: [],
        loading: true,
    },
    reducers: {
        setItems: (state, action) => {
            const { payload } = action
            state.items = payload
        },
        setLoading: (state, action) => {
            const { payload } = action
            state.loading = payload
        }
    }
})


export const { setItems, setLoading } = todos.actions
export const todoReducer = todos.reducer