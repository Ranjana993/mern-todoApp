import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { addTodos } from "../redux/action"


const TodoInfo = () => {
    const [text, setText] = useState("")
    const dispatch = useDispatch()

    const onFormSubmit = (e) => {
        e.preventDefault()
        dispatch(addTodos(text))
        setText("")
    }

    const onInputChange = (e) => {
        setText(e.target.value)
    }
    return (
        <form className='form' onSubmit={onFormSubmit}>
            <input type="text" placeholder='eg. reading' className='input' value={text}  onChange={onInputChange} />
        </form>
    )
}

export default TodoInfo