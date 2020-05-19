const initState = {
    token: null,
    user: {},
    error: null
}

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case 'AUTHENTICATE_USER':
            localStorage.setItem('token', action.payload.token)
            return {...state, token: action.payload.token, user: action.payload.user, error: null}    

        case 'AUTHENTICATE_FAIL':
            return {...state, error: action.payload}

        default:
            return state
    }
}

export default userReducer