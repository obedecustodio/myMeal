import { useSearchParams } from 'react-router-dom'
import '../App.css'
import React, { useEffect, useState } from 'react'



export const NavbarControl = ({setPedidos}) => {
   const [searchParams, setSearchParams] = useSearchParams()
   const status = searchParams.get("status")
    return (
        <nav className="second-navbar">
        <ul>
          <li className={`magic-nav ${status === "new" && "selected-nav"}`}>
            <button className={`button-reset  `} onClick={() => setPedidos("new")}>Novos</button>
          </li>
          <li className={`magic-nav ${status === "preparando" && "selected-nav"}`}>
            <button className={`button-reset `} onClick={() => setPedidos("preparando")}>Preparando</button>
          </li>
          <li className={`magic-nav ${status === "pronto" && "selected-nav"}`}>
            <button className={`button-reset `} onClick={() => setPedidos("pronto")}>Prontos</button>
          </li>
          <li className={`magic-nav ${status === "entregue" && "selected-nav"}`}>
            <button className={`button-reset `} onClick={() => setPedidos("entregue")}>Entregues</button>
          </li>
          
        </ul>
      </nav>
    )
}
