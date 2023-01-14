import { useSelector } from "react-redux"
import { todosSelectors } from "../../engine/todo-reducer/selectors"

export function TodosList() {
    const todos = useSelector(todosSelectors.items)
    return (
        <div className="todos-wrapper js--todos-wrapper">
            {todos.map(item => {
                return (
                    <label className="todo-item" key={item.id} >
                        <div className="todo-item__desc">{item.text}</div>
                    </label>
                )
            })}

        </div>
    )
}