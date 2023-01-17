import { configureStore } from "@reduxjs/toolkit"
import { todoReducer } from "../todo-reducer/slice"
import { delay } from "../middleware/delay"
import thunk from "redux-thunk"

export const store = configureStore({
    reducer: {
        todos: todoReducer
    },
    middleware : (getDefaultMiddleware)=>[...getDefaultMiddleware(),delay,thunk]

    
})