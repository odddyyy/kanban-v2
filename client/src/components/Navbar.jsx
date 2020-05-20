import React from 'react'
import { Navbar, NavDropdown, Nav } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import logo from '../assets/img/navlogo.png'
import { logout } from '../store/actions/user-action'
import { useHistory } from 'react-router-dom'

export default function NavigationBar() {
    
    const dispatch = useDispatch()
    const history = useHistory()

    //functions
    const handleLogout = () => {
        dispatch(logout())
        history.push('/')
    }

    return (
        <Navbar bg="warning" expand="lg">
            <Navbar.Brand>
                <img 
                    src={logo}
                    style={{width:'100px', height:'50px'}}
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link><i class="fas fa-user-circle mr-1"></i>Profile</Nav.Link>
                    <Nav.Link onClick={() => handleLogout()}><i class="fas fa-sign-out-alt mr-1"></i>Logout</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    
    )
}
