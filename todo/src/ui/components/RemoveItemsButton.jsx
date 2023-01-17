import { Button } from "./Button";
import { delItems } from "../../engine/todo-reducer/thunk/delItems";
import { useDispatch, useSelector } from "react-redux"
import React, { useState, useEffect } from "react";
import { todosSelectors } from "../../engine/todo-reducer/selectors"

export function RemoveItemsButton() {
    const [disabled, setDisabled] = useState(true);
    const todos = useSelector(todosSelectors.items)
    const dispatch = useDispatch()
    const onClick = () => {
        dispatch(delItems())
    }
    useEffect(() => {
        todos.length ? setDisabled(false) : setDisabled(true)
    })
    return (
        <Button disabled={disabled} className="form__button" onClick={onClick} type="submit">Удалить все записи</Button>
    )
}
