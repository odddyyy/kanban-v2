const initState = {
    tasks: [],
    task: null
}

const taskReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_TASKS':
            return {...state, tasks: action.payload}

        case 'POST_TASK':
            let updatedTask = state.task
            updatedTask.push(action.payload.task)
            return {...state, tasks: updatedTask}
        
        case 'DELETE_TASK':
            let newTask = []
            state.tasks.forEach(i => {
                if (i.id !== action.payload.id) newTask.push(i)
            })
            return {...state, tasks: newTask}

        default:
            return state
    }
}

export default taskReducer