import {configureStore} from  "@reduxjs/toolkit"
import { counter } from "../counter-reducer/slice"

export const store = configureStore({
    reducer:{
        counter,
    }
})