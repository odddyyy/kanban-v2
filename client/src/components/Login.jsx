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
            console.log(data)
            dispatch(login(data))
            history.push('/board')
        } catch (err) {
            console.log(err)
            setError(err.response.data)
            setTimeout(() => {
                setError(null)
            }, 3000)
        }
        setEmail('')
        setPassword('')
    }
    return (
        <form onSubmit={handleLogin}>
            {error && <span className="alert-danger">{error}</span>}
            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} required/>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required/>
            </div>
            <button type="submit" className="btn btn-primary btn-block">Login</button>
        </form>
    )
}
