import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const AuthComponent = ({logout}) => {
    return (
        <div>
            <li className="nav-item">
                <Link to="/" className='btn btn-warning m-1' onClick={logout}><FontAwesomeIcon icon="fa-solid fa-arrow-right-from-bracket" />Logout</Link>
            </li>
        </div>
    )
}
