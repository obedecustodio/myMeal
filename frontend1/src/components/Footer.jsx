import '../App.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'


export const Footer = () => {
  return (
    <div className='footer mt-3 pt-4 bg-warning d-flex justify-content-between'>
        <div className='d-flex flex-column' id='contacts'>
          <span><FontAwesomeIcon icon="fa-solid fa-envelope"/> obedecossa@outlook.com</span>
          <span><FontAwesomeIcon icon="fa-solid fa-phone"/> 870174804</span>
        </div>
        <div>
            <h5> <FontAwesomeIcon icon="fa-solid fa-copyright"/> ObedeCossa</h5>
        </div>
        <div>
             <a href="#"><FontAwesomeIcon icon={faInstagram} id='icon'/></a>
             <a href="#"><FontAwesomeIcon icon={faFacebook} id='icon'/></a>
             <a href="#"><FontAwesomeIcon icon={faTwitter} id='icon' /></a>
        </div>
    </div>
  )
}
 