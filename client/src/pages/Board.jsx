import React, { useEffect } from 'react'

//components
import Navbar from '../components/Navbar'

//actions
import { getTasks } from '../store/actions/task-action'
import { useDispatch, useSelector } from 'react-redux'

export default function Board() {

    const dispatch = useDispatch()

    //hooks
    useEffect(() => {
        dispatch(getTasks())
    },[])

    //global state
    const tasks = useSelector(state => state.taskReducer.tasks)

    return (
        <div>
            <Navbar />
            {JSON.stringify(tasks)}
        </div>
    )
}
