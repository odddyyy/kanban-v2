import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../store/actions/user-action'

export default function Register() {

    const dispatch = useDispatch()

    //local state
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //global state
    const error = useSelector(state => state.userReducer.error)

    //function to handle register
    const handleRegister = e => {
        e.preventDefault()
        dispatch(register(username, email, password))
        setUsername('')
        setEmail('')
        setPassword('')
    }

    return (
        <form style={{marginTop:'100px'}} onSubmit={handleRegister}>
            {error && <span className="alert-danger">{error}</span>}
            <div class="form-group">
                <label for="exampleInputEmail1">Username</label>
                <input type="text" class="form-control" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required/>
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} required/>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required/>
            </div>
            <button type="submit" class="btn btn-primary">Register</button>
        </form>
    )
}
