import { useSelector } from "react-redux"
import { todosSelectors } from "../../engine/todo-reducer/selectors"
import { checkItem } from "../../engine/todo-reducer/thunk/checkItem"
import { useDispatch } from "react-redux"
import { useState } from "react"

export function TodosList() {
    const todos = useSelector(todosSelectors.items)
    const dispatch = useDispatch()
    const currentTodoId = todos.id
    
    
   const clickCheckBox =()=>{
    console.log(todos.id)
   }

    function onChange () {
        const currentTodo = [todos].find(item => item.id === currentTodoId)
        // console.log(currentTodo)
        // dispatch(checkItem())
    }
    return (
        <div className="todos-wrapper js--todos-wrapper">
            {todos.map(item => {
                return (
                    <label  className="todo-item" key={item.id} >
                        <div className="todo-item__desc">{item.text}</div>
                        <input onClick={clickCheckBox} type="checkbox" onChange={onChange}></input>
                    </label>
                )
            })}

        </div>
    )
}