import { useSelector } from "react-redux"
import { todosSelectors } from "../../engine/todo-reducer/selectors"

export function TodosList() {
    const todos = useSelector(todosSelectors)
    return (
        <div className="todos-wrapper js--todos-wrapper">

            <label className="todo-item" >
                <div className="todo-item__desc"></div>
            </label>

        </div>
    )
}