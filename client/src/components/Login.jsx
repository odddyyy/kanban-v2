import React, { useState } from 'react'
import { login } from '../store/actions/user-action'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
const SERVER_URL = 'http://localhost:5000'

export default function Login() {

    const dispatch = useDispatch()
    const history = useHistory()

    //local state
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    //function to handle login
    const handleLogin = async e => {
        e.preventDefault()
        try {
            const { data } = await axios({
                method: 'POST',
                url: `${SERVER_URL}/user/login`,
                data: { email, password }
            })
            dispatch(login(data))
            history.push('/board')
        } catch (err) {
            setError(err.response.data)
        }
        setEmail('')
        setPassword('')
    }
    return (
        <form onSubmit={handleLogin}>
            {error && <span className="alert-danger">{error}</span>}
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} required/>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required/>
            </div>
            <button type="submit" class="btn btn-primary btn-block">Login</button>
        </form>
    )
}
