import React, { useEffect, useState, useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

//components
import Navbar from '../components/Navbar'
import Cards from '../components/Cards'

//actions
import { getTasks } from '../store/actions/task-action'


export default function Board() {
    const dispatch = useDispatch()
    const history = useHistory()

    const [watch, setWatch] = useState(0)

    //route guard
    if (!localStorage.token) history.push('/')
    
    //global state
    const tasks = useSelector(state => state.taskReducer.tasks)

    //hooks
    useLayoutEffect(() => {
        dispatch(getTasks())
    },[tasks])


    //task division
    const incomplete = tasks.filter(i => i.status === 'incomplete')
    const onProcess = tasks.filter(i => i.status === 'onprocess')
    const onReview = tasks.filter(i => i.status === 'onreview')
    const completed = tasks.filter(i => i.status === 'completed')

    return (
        <div className="board-page">
            <Navbar />
            <div className="container" style={{paddingTop:'6em'}}>
                <div className="row">
                    <div className="col-sm-12 col-md-3 card-column first" style={{overflow:'scroll', height:'85vh'}}>
                        <h3 className="main-text sticky-top">INCOMPLETE</h3>
                        <div className="row" style={{overflow:'scroll'}}>
                            {incomplete.map(task => (
                                <Cards key={task._id} task={task}/>
                            ))}
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3 card-column" style={{overflow:'scroll', height:'85vh'}}>
                        <h3 className="main-text sticky-top">ON PROCESS</h3>
                        <div className="row">
                            {onProcess.map(task => (
                                <Cards key={task._id} task={task}/>
                            ))}
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3 card-column" style={{overflow:'scroll', height:'85vh'}}>
                        <h3 className="main-text sticky-top">ON REVIEW</h3>
                        <div className="row">
                            {onReview.map(task => (
                                <Cards key={task._id} task={task}/>
                            ))}
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3 card-column" style={{overflow:'scroll', height:'85vh'}}>
                        <h3 className="main-text sticky-top">COMPLETED</h3>
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
