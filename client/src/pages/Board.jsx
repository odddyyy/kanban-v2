import React, { useEffect } from 'react'

//components
import Navbar from '../components/Navbar'
import Cards from '../components/Cards'

//actions
import { getTasks } from '../store/actions/task-action'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

export default function Board() {
    const dispatch = useDispatch()
    const history = useHistory()

    //route guard
    if (!localStorage.token) history.push('/')

    //hooks
    useEffect(() => {
        dispatch(getTasks())
    },[])

    //global state
    const tasks = useSelector(state => state.taskReducer.tasks)

    //task division
    const incomplete = tasks.filter(i => i.status === 'incomplete')
    const onProcess = tasks.filter(i => i.status === 'on process')
    const onReview = tasks.filter(i => i.status === 'on review')
    const completed = tasks.filter(i => i.status === 'completed')

    return (
        <div className="bg-light">
            <Navbar />
            <div className="container mt-5">
                <div className="row">
                    <button className="btn btn-outline-primary mb-4 btn-block">Add new task</button>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-3">
                        <h3 className="main-text">Incomplete</h3>
                        <div className="row">
                            {incomplete.map(task => (
                                <Cards key={task._id} task={task}/>
                            ))}
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3">
                        <h3 className="main-text">On Process</h3>
                        <div className="row">
                            {onProcess.map(task => (
                                <Cards key={task._id} task={task}/>
                            ))}
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3">
                        <h3 className="main-text">On Review</h3>
                        <div className="row">
                            {onReview.map(task => (
                                <Cards key={task._id} task={task}/>
                            ))}
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3">
                        <h3 className="main-text">Completed</h3>
                        <div className="row">
                            {completed.map(task => (
                                <Cards key={task._id} task={task}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
