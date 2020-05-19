const initState = {
    tasks: [],
    task: null
}

const taskReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_TASKS':
            return {...state, tasks: action.payload}
    
        default:
            return state
    }
}

export default taskReducer