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

export const postTask = (title, description) => async dispatch => {
    try {
        const { data } = await axios({
            method: 'POST',
            url: `${SERVER_URL}/task`,
            headers: { token: localStorage.token },
            data: { title, description }
        })
        dispatch({
            type: 'POST_TASK',
            payload: data.task
        })
    } catch (err) {
        console.log(err)
    }
}

export const deleteTask = (id) => async dispatch => {
    await axios({
        method: 'DELETE',
        url: `${SERVER_URL}/task/${id}`,
        headers: { token: localStorage.token }
    })
    dispatch({
        type: 'DELETE_TASK',
        payload: id
    })
}