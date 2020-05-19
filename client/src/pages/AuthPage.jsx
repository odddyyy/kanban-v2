import React, { useState } from 'react'

import logo from '../assets/img/logo.jpg'

//components
import Login from '../components/Login'
import Register from '../components/Register'

export default function AuthPage() {
    const [change, setChange] = useState(0)
    return (
        <div className="container">
            <div className="row justify-content-center align-items-center" style={{height:'100vh'}}>
                <div className="col-sm-12 col-md-6">
                    <img 
                        src={logo}
                        style={styles.image}
                    />
                </div>
                <div className="col-sm-12 col-md-6">
                    {change === 0 ?
                    <>
                        <Login />
                        <small>Don't have an account ? Register <span style={styles.toogle} onClick={() => setChange(1)}>here</span></small>
                    </> :
                    <>
                        <Register />
                        <small>Already have an account ? Login <span style={styles.toogle} onClick={() => setChange(0)}>here</span></small>
                    </>
                    } 
                </div>
            </div>
        </div>
    )
}

const styles = {
    toogle: {
        cursor: 'pointer',
        color: 'blue',
        textDecoration: 'underline'
    },
    image: {
        width:'80%', 
        height: '234px'
    }
}
