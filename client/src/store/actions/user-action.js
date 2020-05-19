export const login = (data) => {
    return async dispatch => {
        dispatch({
            type: 'AUTHENTICATE_USER',
            payload: data
        })
    }
}

export const register = (data) => {
    return async dispatch => {
        dispatch({
            type: 'AUTHENTICATE_USER',
            payload: data
        })
    }
}