import React, { useState } from 'react'
import { KitComp } from '../components/KitComp'
import { NavbarControl } from '../components/NavbarControl'
import { useSearchParams } from 'react-router-dom'

export const Kit = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    status: ""
  })
  const pedidos = searchParams.get("status")
  function setPedidos(p){
    setSearchParams(prev=>{
      prev.set("status", p)
      return prev
    })
  }
  // const [pedidos, setPedidos] =useState("");
  return (
    <div>
        <NavbarControl setPedidos = {setPedidos}/>
          <KitComp status={pedidos}/>
    </div>
  )
}
