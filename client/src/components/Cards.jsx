import React from 'react'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'

//components
import { Card } from 'react-bootstrap'
import CardDetail from './CardDetail'

//actions
import { deleteTask, changeStatus } from '../store/actions/task-action'

export default function Cards({ task }) {

    const dispatch = useDispatch()

    const handleDelete = async id => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          })

        if (result.value) {
            dispatch(deleteTask(id))
            Swal.fire(
            'Deleted!',
            'Task deleted',
            'success'
            )
        }
    }

    const handleChangeStatus = (id, status, move) => {
        dispatch(changeStatus(id, status, move))
    }

    return (
        <Card style={styles.cardStyle} className="mb-3 bg-light mx-auto">
        <Card.Body>
            <Card.Title className="text-center">{task.title}</Card.Title>
            <CardDetail task={task}/>
            <div className="text-center mt-2">
                {task.status === 'onprocess' || task.status === 'onreview' || task.status === 'completed' ? 
                    <span style={styles.icon} onClick={() => handleChangeStatus(task._id, task.status, 'prev')}><i class="fas fa-arrow-circle-left mr-4 text-warning"></i></span>
                    : 
                    null
                }
                
                <i className="fas fa-edit mr-2"></i>
                <span style={styles.icon} onClick={() => handleDelete(task._id)}><i className="fas fa-trash-alt text-danger"></i></span>
                {task.status === 'onprocess' || task.status === 'onreview' || task.status === 'incomplete' ? 
                    <span style={styles.icon} onClick={() => handleChangeStatus(task._id, task.status, 'next')}><i class="fas fa-arrow-circle-right ml-4 text-success"></i></span>
                    : 
                    null
                }
                
            </div>
        </Card.Body>
        </Card>
    )
}

const styles = {
    cardStyle: { 
        width: '13rem',
        boxShadow:'3px 3px 5px grey',
        borderRadius:'5%'
    },
    icon: {
        cursor: 'pointer'
    }
}