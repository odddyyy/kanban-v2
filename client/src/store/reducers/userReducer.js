import { useHistory } from "react-router-dom"

const initState = {
    token: null,
    user: {},
    error: null,
    isAuthenticated: false
}

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case 'AUTHENTICATE_USER':
            localStorage.setItem('token', action.payload.token)
            return {...state, token: action.payload.token, user: action.payload.user, error: null, isAuthenticated: true}    

        case 'AUTHENTICATE_FAIL':
            return {...state, error: action.payload}

        default:
            return state
    }
}

export default userReducer