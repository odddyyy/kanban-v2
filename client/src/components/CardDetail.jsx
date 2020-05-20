import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import formatter from '../helpers/dateFormatter'

export default function CardDetail({ task }) {

    //local state
    const [show, setShow] = useState(false)
    const [title, setTitle] = useState('')

    //toogle modal function
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <div className="text-center" onClick={handleShow}>
                <i class="fas fa-ellipsis-h text-dark" style={styles.icon}></i>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>{task.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h6>{task.description}</h6>
                    <div className="mr-auto">
                        <small>Created: {formatter(task.date)}</small>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

const styles = {
    icon: {
        cursor:'pointer'
    }
}