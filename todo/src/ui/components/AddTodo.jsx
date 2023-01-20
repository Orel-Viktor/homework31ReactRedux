import { useDispatch } from "react-redux"
import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { addItem } from "../../engine/todo-reducer/thunk/addItem";



export function AddTodo() {
    const [disabled, setDisabled] = useState(true);
    const [inputValue, setValue] = useState("");
    const hadleInput = (e) => setValue(e.target.value);
    const dispatch = useDispatch()


    const onSubmit = (event) => {
        dispatch(addItem(event, inputValue, setValue))
    }
   

    useEffect(() => {
        setDisabled(!inputValue),
            [inputValue]
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