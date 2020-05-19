import axios from 'axios'
const SERVER_URL = 'http://localhost:5000'

export const login = (email, password) => {
    return async dispatch => {
        try {
            const { data } = await axios({
                method: 'POST',
                url: `${SERVER_URL}/user/login`,
                data: { email, password }
            })
            dispatch({
                type: 'AUTHENTICATE_USER',
                payload: data
            })
        } catch (err) {
            console.log(err.response.data)
            dispatch({
                type: 'AUTHENTICATE_FAIL',
                payload: err.response.data
            })
        }
    }
}

export const register = (username, email, password) => {
    return async dispatch => {
        try {
            const { data } = await axios({
                method: 'POST',
                url: `${SERVER_URL}/user/register`,
                data: { username, email, password }
            })
            dispatch({
                type: 'AUTHENTICATE_USER',
                payload: data
            })
        } catch (err) {
            console.log(err.response.data)
            dispatch({
                type: 'AUTHENTICATE_FAIL',
                payload: err.response.data
            })
        }
    }
}