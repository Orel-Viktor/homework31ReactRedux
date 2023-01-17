
import { useSelector, useDispatch } from "react-redux"
import { todosSelectors } from "../../engine/todo-reducer/selectors"
// import { setItems } from "../../engine/todo-reducer/slice"
import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { addItem } from "../../engine/todo-reducer/thunk/addItem";


export function AddTodo() {
    const [disabled, setDisabled] = useState(true);
    const [inputValue, setValue] = useState("");
    const hadleInput = (e) => setValue(e.target.value);
    const dispatch = useDispatch()
    const todos = useSelector(todosSelectors.items)

    const onSubmit = (event, inputValue, setValue) => {
        dispatch(addItem(event, inputValue, setValue))
    }
    // const addItem = (event) => {
    //     event.preventDefault()
    //     dispatch(setItems([...todos, {
    //         id: Math.floor(Math.random() * 1000),
    //         text: inputValue,
    //         checked: false,
    //     }],
    //         {
    //             delayMS: 1
    //         }
    //     ))
    //     setValue("")
    // }


    useEffect(() => {
        inputValue ? setDisabled(false) : setDisabled(true)
    })
    return (
        <form action="#" className="form js--form" onSubmit={onSubmit}>
            <input
                value={inputValue}
                onChange={hadleInput}

                type="text"
                className="form__input js--form__input" />
            <Button type="submit" className="form__button" disabled={disabled}>добавить</Button>
        </form>
    )
}