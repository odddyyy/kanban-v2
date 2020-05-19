import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../store/actions/user-action'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
const SERVER_URL = 'http://localhost:5000'

export default function Register() {

    const dispatch = useDispatch()
    const history = useHistory()

    //local state
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    //function to handle register
    const handleRegister = async e => {
        e.preventDefault()
        try {
            const { data } = await axios({
                method: 'POST',
                url: `${SERVER_URL}/user/register`,
                data: { username, email, password }
            })
            dispatch(register(data))
            history.push('/board')
        } catch (err) {
            setError(err.response.data)
        }
        setUsername('')
        setEmail('')
        setPassword('')
    }

    return (
        <form onSubmit={handleRegister}>
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
            <button type="submit" class="btn btn-primary btn-block">Register</button>
        </form>
    )
}
