import React from 'react'
import { NavDropdown } from 'react-bootstrap'
import { useSelector } from 'react-redux'

export default function Navbar() {

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">
                <img 
                    src="https://cdn.dribbble.com/users/2260611/screenshots/6655994/klogsso-min.png" 
                    style={{width:'110px', height:'60px'}}
                />
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                <NavDropdown title={<i class="fas fa-user fa-lg"></i>} id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">View profile</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item className="text-danger"><i class="fas fa-sign-out-alt mr-1"></i>Logout</NavDropdown.Item>
                </NavDropdown>
                </ul>
            </div>
        </nav>
    
    )
}
