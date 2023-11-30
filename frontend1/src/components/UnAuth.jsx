import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const UnAuth = () => {
    return (
        <div className='d-flex'>
            <li className="nav-item">
                <Link to="/login" className='btn btn-warning m-1'><FontAwesomeIcon icon="fa-solid fa-arrow-right-from-bracket" />Login</Link>
            </li>
            <li className="nav-item">
                <Link to="/register" className='btn btn-outline-warning m-1'>registrar</Link>
            </li>
        </div>
    )
}
