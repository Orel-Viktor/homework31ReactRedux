import { Button } from "./Button";
import { delItems } from "../../engine/todo-reducer/thunk/delItems";
import {  useDispatch } from "react-redux"

export function RemoveItemsButton() {
    const dispatch = useDispatch()
    const onClick = () => {
        dispatch(delItems())
    }
    return (
        <Button onClick={onClick} type="submit">Удалить все записи</Button>
    )
}
