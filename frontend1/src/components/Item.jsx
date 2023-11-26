import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export const Item = ({item, remover, diminuir, aumentar}) => {

    const [quant, setQuant] = useState(item.quant);

    const increase = ()=>{
        setQuant(q => q+1)
        aumentar(item.id, quant)
    }
    const decrease = ()=>{
        setQuant(q => q-1)
        diminuir(item.id, quant)
    }
    return (
        <div className='row'>
            <div className='col-3'>{item.name}</div>
            <div className='col-3'>
                <button className='btn btn-success m-1' onClick={() => {
                    increase();
                }
                }><FontAwesomeIcon icon="fa-solid fa-plus" /></button>
                {quant}
                <button className='btn btn-success m-1' onClick={() => {
                    decrease();
                }}><FontAwesomeIcon icon="fa-solid fa-minus" /></button>
            </div>
            <div className='col-3'>{item.price}</div>
            <div className='col-3'> <button className='btn btn-danger' onClick={() => remover(index)}>remover</button></div>
        </div>
    )
}
