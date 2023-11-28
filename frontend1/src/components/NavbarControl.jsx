import '../App.css'
import React, { useEffect, useState } from 'react'


export const NavbarControl = ({setPedidos}) => {
   
    return (
        <nav className="second-navbar">
        <ul>
          <li>
            <button className='btn btn-warning' onClick={() => setPedidos(p => "new")}>Novos</button>
          </li>
          <li>
            <button className='btn btn-warning' onClick={() => setPedidos(p => "preparando")}>Preparando</button>
          </li>
          <li>
            <button className='btn btn-warning' onClick={() => setPedidos(p => "pronto")}>Prontos</button>
          </li>
          <li>
            <button className='btn btn-warning' onClick={() => setPedidos(p => "entregue")}>Entregues</button>
          </li>
          
        </ul>
      </nav>
    )
}
