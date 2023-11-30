import '../App.css'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/fav.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AuthComponent } from './AuthComponent'
import { UnAuth } from './UnAuth'

export const Navbar = () => {

    useEffect(()=>{
        verifyLoged()
        console.log('oi')
    }, [logout])


    const isLoged = localStorage.getItem('isAuth') || localStorage.getItem('isAuthE') === 'true' ? true : false;

    function verifyLoged(){
        return(
        isLoged ? <AuthComponent logout={logout}/>  : <UnAuth/>
        )
    }
    function logout() {
        localStorage.removeItem('isAuth')
        localStorage.removeItem('isAuthE')
        localStorage.removeItem('token')
        localStorage.removeItem('user.id')

        
    }
    return (
        <div>

            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid" id='nav'>

                   

                    <div className="collapse navbar-collapse" id="navbarNav nav">
                      <div className="d-flex justify-content-between" id='nav'>
                      <div>
                        <Link to="/" className='navbar-brand'><img src={logo} alt="mymeal" id='logo' /></Link>
                    </div>
                      <div>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/menu" className='nav-link' id='navLink'><FontAwesomeIcon icon="fa-solid fa-bars" />  Menu</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="navbar-nav">
                                {verifyLoged()}
                            </ul>
                        </div>
                      </div>
                    </div>

                </div>
            </nav>
        </div>
    )
}
