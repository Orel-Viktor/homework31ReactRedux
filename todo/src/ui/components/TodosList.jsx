import { useSelector } from "react-redux"
import { todosSelectors } from "../../engine/todo-reducer/selectors"
import { checkItem } from "../../engine/todo-reducer/thunk/checkItem"
import { useDispatch } from "react-redux"


export function TodosList() {
    const todos = useSelector(todosSelectors.items)
    const dispatch = useDispatch()


    const onChange = (currentId) => {
        let currentTodo = todos.find(item => item.id === currentId)
    }

    return (
        <div className="todos-wrapper js--todos-wrapper">
            {todos.map(item => {
                return (
                    <label className="todo-item" key={item.id} >
                        <div className="todo-item__desc">{item.text}</div>
                        <input type="checkbox" onChange={() => onChange(item.id)}></input>
                    </label>
                )
            })}

        </div>
    )
}