import React, { useState } from 'react'

//components
import Login from '../components/Login'
import Register from '../components/Register'

export default function AuthPage() {
    const [change, setChange] = useState(0)
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 mt-3">
                    <img 
                        src='https://cdn2.f-cdn.com/contestentries/1233379/24944931/5a61943e42134_thumb900.jpg' 
                        style={styles.image}
                    />
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6">
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
        width:'580px', 
        height: '500px'
    }
}
