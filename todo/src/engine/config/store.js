import { configureStore } from "@reduxjs/toolkit"
import { todoReducer } from "../todo-reducer/slice"
import {logger} from "redux-logger"
import { delay } from "../middleware/delay"

export const store = configureStore({
    reducer: {
        todos: todoReducer
    },
    middleware : (getDefaultMiddleware)=>[...getDefaultMiddleware(),delay]

    
})