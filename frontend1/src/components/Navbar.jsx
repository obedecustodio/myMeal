import '../App.css'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/fav.svg'

export const Navbar = () => {
    const isLoged = localStorage.getItem('isAuth');
    const [log, setLog] = useState(isLoged === 'true'? "logout" : "login");
    useEffect(()=>{
        setLog(isLoged === 'true' ? 'logout' : 'login')
    }, [])
  

    function logout(){
        localStorage.setItem('isAuth', 'false')
        localStorage.setItem('token', '')
        localStorage.setItem('user.id', '')

        setLog(e => 'login')
    }
    return (
        <div>

            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid" id='nav'>

                        <div>
                            <Link to="/" className='navbar-brand'><img src={logo} alt="mymeal" id='logo'/></Link>
                        </div>

                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/menu" className='nav-link'>menu</Link>
                                </li>
                                <li className="nav-item">
                                    { isLoged === 'true'? <Link to="/" className='nav-link' onClick={logout}>{log}</Link> :  <Link to="/login" className='nav-link'>{log}</Link> }
                                    
                                </li>
                                <li className="nav-item">
                                    <Link to="/register" className='nav-link'>registrar</Link>
                                </li>
                            </ul>
                        </div>

                </div>
            </nav>
        </div>
    )
}
