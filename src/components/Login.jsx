import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { login, resetAuth } from './store/AuthSlice'
import { useNavigate } from 'react-router'
import { allDeleteTodo } from './store/TodoSlice'

export const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogin = () =>{
        if(email && password) {
            dispatch(login({email}))
        navigate("/todo")
        } else {
            alert("zapolnite vse poli")
        }
    }
  return (
    <Cont>
        <Block>    
        <h1>Login</h1>
                <StyledInput placeholder='email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <StyledInput placeholder='password' type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <StyledButton onClick={handleLogin}>Login</StyledButton>

        </Block>
    </Cont>
  )
}


const StyledInput = styled.input`
    font-size: 18px;
    background-color: aliceblue;


`

const StyledButton = styled.button`
    font-size: 20px;
    color: white;
    background-color: #346ac2;
`
const Cont = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 180px;
`
const Block = styled.div`
    display: flex;
    flex-direction: column;

    border: 1px solid white;
    border-radius: 10px ;
    width: 300px;
    height: 200px;
    gap: 10px;
  
`