import React, { useState } from 'react'
import { KitComp } from '../components/KitComp'
import { NavbarControl } from '../components/NavbarControl'

export const Kit = () => {
  const [pedidos, setPedidos] =useState("");
  return (
    <div>
        <NavbarControl setPedidos = {setPedidos}/>
          <KitComp status={pedidos}/>
    </div>
  )
}
