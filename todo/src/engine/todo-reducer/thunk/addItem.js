import { setItems } from "../slice";



export const addItem = (event,inputValue,setValue)=>(dispatch,state)=>{
        event.preventDefault()
        const {todos} = state()
        dispatch(setItems([...todos.items, {
            id: Math.floor(Math.random() * 1000),
            text: inputValue,
            checked: false,
        }],
            {
                delayMS: 1
            }
        ))
        setValue("")
    }
