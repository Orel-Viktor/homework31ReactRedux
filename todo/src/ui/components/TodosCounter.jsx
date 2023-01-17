import {useSelector} from "react-redux"
import { todosSelectors } from "../../engine/todo-reducer/selectors"

export function TodoCounter(){
    const todosValue = useSelector(todosSelectors.items).length
   
    return(
       <p>
        Всего <span>{todosValue}</span>Todos
       </p>
    )
}