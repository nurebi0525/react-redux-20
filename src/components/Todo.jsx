import styled from 'styled-components'
import { resetAuth } from './store/AuthSlice'
import { addTodo, allDeleteTodo, deletetodo, toggleComplate } from './store/TodoSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { useNavigate } from 'react-router'

export const Todo = () => {
    const [text, setText] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const todos = useSelector((state) => state.todo.todos)

    const handleAdd = () => {
        if (text.trim()) {
            dispatch(addTodo({ text }))
            setText("")
        }
    }

    const handleLogout = () => {
        dispatch(resetAuth());
        dispatch(allDeleteTodo());
        navigate('/'); 
    };

    return (
        <Conte>
            <h2>Todo-List</h2>
            <div>
                <input
                    type="text"
                    placeholder="todo"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button onClick={handleAdd}>Add</button>
                <button onClick={() => dispatch(allDeleteTodo())}>Delete All</button>
                <button onClick={handleLogout}>Logout</button>
            </div>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span
                            onClick={() => dispatch(toggleComplate(todo.id))}
                            style={{
                                textDecoration: todo.completed ? 'line-through' : 'none',
                                cursor: 'pointer'
                            }}
                        >
                            {todo.text}
                        </span>
                        <button onClick={() => dispatch(deletetodo(todo.id))}>delete</button>
                    </li>
                ))}
            </ul>
        </Conte>
    )
}

const Conte = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    gap: 20px;

    h2 {
        font-size: 26px;
        font-weight: 800;
    }

    div {
        display: flex;
        gap: 5px;
    }

    button {
        color: white;
        background-color: #3535ff;
        font-size: 20px;
        border-radius: 5px;
        border: 1px solid;
        padding: 5px;
        cursor: pointer;
    }

    input {
        font-size: 18px;
    }

    ul {
        width: 400px;
        list-style: none;
        padding: 0;
    }

    li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #f4f4f4;
        padding: 10px;
        margin: 5px 0;
        border-radius: 5px;
    }

    span {
        font-size: 18px;
        cursor: pointer;
    }
`
