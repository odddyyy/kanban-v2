import React from 'react'
import { Card, Button } from 'react-bootstrap'

export default function Cards({ task }) {
    return (
        <Card style={{ width: '18rem', boxShadow:'3px 3px 5px grey' }} className="mb-3">
        <Card.Body>
            <Card.Title className="text-center">{task.title}</Card.Title>
            <div className="text-right">
                <i class="fas fa-ellipsis-h mr-3 text-dark" style={styles.icon}></i>
                <i className="fas fa-edit mr-3 text-secondary" style={styles.icon}></i>
                <i className="fas fa-trash-alt text-danger" style={styles.icon}></i>
            </div>
        </Card.Body>
        </Card>
    )
}

const styles = {
    icon: {
        cursor:'pointer'
    }
}