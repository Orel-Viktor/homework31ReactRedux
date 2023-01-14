import { useSelector, useDispatch } from "react-redux"
import { todosSelectors } from "../../engine/todo-reducer/selectors"
import { setItems } from "../../engine/todo-reducer/slice"

export function AddTodo() {
    const dispatch = useDispatch()
    const todos = useSelector(todosSelectors.items)
    const addItem = (event) => {
        event.preventDefault()
        dispatch(setItems([...todos, {
            id: Math.floor(Math.random() * 1000),
            text: event.target[0].value,
            checked: false,
        }]))
        event.target[0].value = ""     
    }
    
    return (
        <form action="#" className="form js--form" onSubmit={addItem}>
            <input type="text" className="form__input js--form__input" />
            <button className="form__button" type="submit" >Добавить</button>
        </form>
    )
}