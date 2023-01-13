import { useSelector, useDispatch } from "react-redux"
import { counterSelector, increment, decrement } from "../../engine/counter-reducer/slice"


export function Counter() {
    const value = useSelector(counterSelector.value)
    return (
        <span id="value">{value}</span>
    )
}

export function ButtonInc() {
    const dispatch = useDispatch()
    const handleClick = () => dispatch(increment())

    return (
        <button onClick={handleClick} id="increment">+</button>
    )
}

export function ButtonDec() {
    const dispatch = useDispatch()
    const handleClick = () => dispatch(decrement())
    return (
        <button onClick={handleClick} id="decrement">-</button>
    )
}