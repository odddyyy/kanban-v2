import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

//reducers
import userReducer from '../store/reducers/userReducer'
import taskReducer from '../store/reducers/taskReducer'

const reducers = combineReducers({
    //all reducers
    userReducer,
    taskReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store