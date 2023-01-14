import { configureStore } from "@reduxjs/toolkit"
import { todoReducer } from "../todo-reducer/slice"

export const store = configureStore({
    reducer: {
        todos: todoReducer
    }
})