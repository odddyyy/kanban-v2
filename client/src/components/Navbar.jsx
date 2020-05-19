import React from 'react'
import { Navbar, NavDropdown, Nav } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import logo from '../assets/img/navlogo.png'

export default function NavigationBar() {

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
                <Nav className="ml-auto" style={{marginRight:'100px'}}>
                <NavDropdown title={<i class="fas fa-user fa-lg text-dark"></i>} id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">View profile</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item className="text-danger"><i class="fas fa-sign-out-alt mr-1"></i>Logout</NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    
    )
}
