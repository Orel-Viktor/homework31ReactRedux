import { setItems } from "../slice"



export const checkItem = (currentItem) => (dispatch, state) => {
    const { todos } = state()
   
    dispatch(setItems())
    
}