import axios from 'axios'
const SERVER_URL = 'http://localhost:5000'

export const getTasks = () => async dispatch => {
    try {
        const { data } = await axios({
            method: 'GET',
            url: `${SERVER_URL}/task`,
            headers: { token: localStorage.token }
        })
        dispatch({
            type: 'GET_TASKS',
            payload: data
        })
    } catch (err) {
        console.log(err.response.data)
    }
}