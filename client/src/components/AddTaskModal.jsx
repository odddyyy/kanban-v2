import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { postTask } from '../store/actions/task-action'

export default function AddTaskModal() {

    const dispatch = useDispatch()

    //local state
    const [show, setShow] = useState(false)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    //toogle modal function
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //handling adding new task
    const addTask = () => {
        dispatch(postTask(title, description))
        handleClose()
        setTitle('')
        setDescription('')
    }

    return (
        <>
            <span className="text-light" style={{cursor:'pointer'}} onClick={handleShow}><i className="fas fa-plus-circle mr-1"></i>Task</span>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form onSubmit={addTask}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="email" onChange={e => setTitle(e.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" onChange={e => setDescription(e.target.value)}/>
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={() => addTask()}>
                        Add
                    </Button>
                </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}
