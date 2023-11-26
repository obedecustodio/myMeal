import React, { useState } from 'react';
import '../assets/css/shopping.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import DataContext from '../providers/Data'
import { useContext } from 'react'

const ShoppingCart = ({ selectedItems, total }) => {

  const dados = useContext(DataContext)
  const alterar = () =>{
    dados.setDados(prev =>{
      let newDados = selectedItems

      return newDados
    })
  }
  return (
    <div className='shopping-bar'>
      <h3> <FontAwesomeIcon icon="fa-solid fa-cart-shopping" /> Teu Pedido</h3>
      <ul>
        {selectedItems.map((item, index) => (
          <li key={index}>{item.name} - {item.price},00 MZN</li>
        ))}
      </ul>
    
      <h5>Total: {total},00 MZN</h5>
      
      <Link to="/cart" className='btn btn-warning' onClick={alterar}>Comprar</Link>
    </div>
  );
};

export default ShoppingCart;
