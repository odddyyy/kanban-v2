import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

//components
import Navbar from '../components/Navbar'
import CardContainer from '../components/CardContainer'

//actions
import { getTasks } from '../store/actions/task-action'

export default function Board() {
    
    const dispatch = useDispatch()
    const history = useHistory()

    //route guard
    if (!localStorage.token) history.push('/')
    
    //global state
    const tasks = useSelector(state => state.taskReducer.tasks)
    
    //hooks
    useEffect(() => {
        console.log('memek')
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
                    <CardContainer tasks={incomplete} title={'INCOMPLETE'}/>
                    <CardContainer tasks={onProcess} title={'ON PROCESS'}/>
                    <CardContainer tasks={onReview} title={'ON REVIEW'}/>
                    <CardContainer tasks={completed} title={'COMPLETED'}/>
                </div>
            </div>
        </div>
    )
}
