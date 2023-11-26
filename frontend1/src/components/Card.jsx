import React from 'react';
import { useState } from 'react';
import '../App.css'

function Card({m1, valor, descri, adicionar, id}){
    const [item, setItem] = useState([]);
    const [conta, setConta] = useState(0);
        const handleClick = ()=>{
            adicionar(descri, valor, id)
        }
      return (
        <div className="card mt-3">
          <img src={m1} className="card-img-top mx-auto d-block" alt="Sample" />
          <div className="card-body">
            <h5 className="card-text">{descri}</h5>
            <p className="card-title">{valor},00 MZN</p>
            <button className='btn btn-warning' onClick={handleClick}> Adicionar </button>
          </div>
        </div>
      );
    };
    
    

export default Card;