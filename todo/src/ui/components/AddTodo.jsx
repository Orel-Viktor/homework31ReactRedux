
import { useSelector, useDispatch } from "react-redux"
import { todosSelectors } from "../../engine/todo-reducer/selectors"
import { setItems } from "../../engine/todo-reducer/slice"
import React, { useState, useEffect } from "react";


export function AddTodo() {
    const [disabled, setDisabled] = useState(true);
    const [inputValue, setValue] = useState("");


    const hadleInput = (e) => setValue(e.target.value);

    const dispatch = useDispatch()
    const todos = useSelector(todosSelectors.items)
    const addItem = (event) => {
        event.preventDefault()
        dispatch(setItems([...todos, {
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


    useEffect(() => {
        inputValue ? setDisabled(false) : setDisabled(true)
    })
    return (
        <form action="#" className="form js--form" onSubmit={addItem}>
            <input
                value={inputValue}
                onChange={hadleInput}

                type="text"
                className="form__input js--form__input" />
            <button disabled={disabled} className="form__button" type="submit" >Добавить</button>
        </form>
    )
}