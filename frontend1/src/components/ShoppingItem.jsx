import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ShoppingItem = () => {
    return (


        <div className='container'>
            <div className="col-12">
                <h1 className='text-warning text-center p-5'>Confirme o seu pedido</h1>
            </div>
            {/* {selectedItems.map((item, index) => (
        //   <li key={index}>{item.name} - {item.price},00 MZN</li>
    ))} */}
            <div class="alert d-flex justify-content-between">
                <div>
                    Item
                </div>
                <div>
                    Preco
                </div>
                <div>
                    Quantidade
                </div>
                <div>
                    Acao
                </div>
            </div>
            <div class="alert alert-warning d-flex justify-content-between">
                <div>
                    Hamburguer completo com batata
                </div>
                <div>
                    250
                </div>
                <div>
                    3
                    <button className='btn btn-success m-1' onClick={() => increase(item.id)}><FontAwesomeIcon icon="fa-solid fa-plus" /></button>
                    <button className='btn btn-success m-1'><FontAwesomeIcon icon="fa-solid fa-minus" /></button>
                </div>
                <div>
                    <button className='btn btn-danger'>Remover</button>
                </div>
            </div>
            <div class="alert alert-warning d-flex justify-content-between">
                <div>
                    item
                </div>
                <div>
                    preco
                </div>
                <div>
                    quantidade
                    <button className='btn btn-success m-1'><FontAwesomeIcon icon="fa-solid fa-plus" /></button>
                    <button className='btn btn-success m-1'><FontAwesomeIcon icon="fa-solid fa-minus" /></button>
                </div>
                <div>
                    <button className='btn btn-danger'>Remover</button>
                </div>
            </div>
            <div class="alert alert-warning d-flex justify-content-between">
                <div>
                    item
                </div>
                <div>
                    preco
                </div>
                <div>
                    quantidade
                    <button className='btn btn-success m-1'><FontAwesomeIcon icon="fa-solid fa-plus" /></button>
                    <button className='btn btn-success m-1'><FontAwesomeIcon icon="fa-solid fa-minus" /></button>
                </div>
                <div>
                    <button className='btn btn-danger'>Remover</button>
                </div>
            </div>
            <div className='text-center'>
                <button className='btn btn-warning'>Comprar</button>
            </div>
        </div>
    )
}
