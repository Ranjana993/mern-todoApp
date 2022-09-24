import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleTodo, updateTodo, deleteTodo } from '../redux/action'

const GettingAllTodos = ({ todo }) => {
    const [editing, setEdititng] = useState(false)
    const [text, setText] = useState(todo.data)
    const dispatch = useDispatch()

    const onformSubmit = (e) => {
        e.preventDefault()
        setEdititng(prev => !prev)
        dispatch(updateTodo(todo._id , text))
    }
    return (<>
        <li
            className='task'
            style={{
                textDecoration: todo.done ? "line-through" : "",
                color: todo.done ? '#dbc3c7' : "#34495e"
            }}
            onClick={() => dispatch(toggleTodo(todo._id))}
        >
            <span style={{ display: editing ? 'none' : "" }}>{todo.data} </span>
            <form onSubmit={onformSubmit} style={{ display: editing ? 'inline' : "none" }}>
                <input type="text" value={text} onChange={e => setText(e.target.value)} className="editTodo" />
            </form>
            <span onClick={()=> dispatch(deleteTodo(todo._id))} className='icon'><i className='fa fa-trash'></i></span>
            <span onClick={() => setEdititng(prev => !prev)} className='icon'><i className='fa fa-pen'></i></span>
        </li>

    </>

    )
}

export default GettingAllTodos