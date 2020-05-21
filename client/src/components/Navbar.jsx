import React from 'react'
import { Navbar, NavDropdown, Nav } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import logo from '../assets/img/navlogo.png'
import { logout } from '../store/actions/user-action'
import { useHistory } from 'react-router-dom'
import AddTaskModal from './AddTaskModal'

export default function NavigationBar() {
    
    const dispatch = useDispatch()
    const history = useHistory()

    //functions
    const handleLogout = () => {
        dispatch(logout())
        history.push('/')
    }

    return (
        <Navbar bg="dark" expand="lg" className="fixed-top">
            <Navbar.Brand>
                <img 
                    src={logo}
                    style={{width:'100px', height:'50px'}}
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    
                </Nav>
                <Nav className="ml-auto">
                    <Nav.Link className="text-light mr-5 links"><AddTaskModal /></Nav.Link>
                    <Nav.Link className="text-light mr-5 links"><i className="fas fa-user-circle mr-1"></i>Profile</Nav.Link>
                    <Nav.Link className="text-light links" onClick={() => handleLogout()}><i className="fas fa-sign-out-alt mr-1"></i>Logout</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    
    )
}
