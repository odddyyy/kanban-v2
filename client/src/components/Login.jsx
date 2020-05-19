import React, { useState } from 'react'
import { login } from '../store/actions/user-action'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

export default function Login() {

    const dispatch = useDispatch()
    const history = useHistory()

    //local state
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //global state
    const error = useSelector(state => state.userReducer.error)

    //function to handle login
    const handleLogin = e => {
        e.preventDefault()
        dispatch(login(email, password))
        setEmail('')
        setPassword('')
        if (!error) history.push('/board')
    }
    return (
        <form style={{marginTop:'150px'}} onSubmit={handleLogin}>
            {error && <span className="alert-danger">{error}</span>}
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} required/>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required/>
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
        </form>
    )
}
