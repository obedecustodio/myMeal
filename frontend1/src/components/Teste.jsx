import $ from 'jquery'
import { useContext } from 'react'
import DataContext from '../providers/Data'
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Item } from './Item'

export const Teste = () => {
    const token = localStorage.getItem('token');
    const dados = useContext(DataContext)
    const navigate = useNavigate();
    const [data, setData] = useState(dados.dados)

    let items = '';
    let price = 0;
    data.map((item) => {
        items = `${items}, ${item.name} ${item.quant}`
        price += item.price
    });
    const owner = localStorage.getItem('user.name');
    const userId = Number(localStorage.getItem('user.id'));
    const status = 'new';
    const [pedido, setPedido] = useState({
        items,
        price,
        owner,
        status,
        userId: userId
    })

    const aumentar = (id,quant) => {
        setData(prev => {
            const updated = prev.map((item) => {
                if (item.id === id) {
                    item.quant = quant
                }
                return item
            })
            return updated;
        });
    }

    const diminuir = (id) => {
        dados.setDados(prev => {
            const updated = prev.map((item) => {
                if (item.id === id) {

                    item.quant = 1 ? 1 : item.quant = quant
                }
                return item
            })

            return updated;
        });
    }


    const send = () => {
        $.ajax({
            url: 'http://127.0.0.1:8000/api/teste',
            method: 'POST',
            data: JSON.stringify(pedido),
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            success: (data) => {
                console.log('Data sent and received:', data);
                navigate('/espera')
            },
            error: (error) => {
                console.log('Error:', error);
            },
        });
    }

    const remover = (id) => {
        console.log(id)
        setData(prev => {
            console.log(prev)

            const updated = [...prev]
            console.log(updated)
            updated.splice(id, 1)
            console.log(updated)

            return updated;
        });

    }
    return (
        <div className='container'>
            <div className="row">
                <div className="col-12">
                    <h1 className='text-warning text-center p-5'>Confirme o seu pedido</h1>
                </div>
            </div>

            <div className="row alert alert-primary">
                <div className="col-3">Item</div>
                <div className="col-3">Quantidade</div>
                <div className="col-3">Preco</div>
                <div className="col-3"></div>
            </div>
                    {data.map((item, index) => (
                        <div className='row alert alert-warning' key={item.id}>
                            <Item item={item} remover={remover} diminuir={diminuir} aumentar={aumentar}/>
                        </div>
                    ))}
            <div className="alert alert-warning text-center">
                <h3>Total: {price},00 MZN</h3>
                <button className='btn btn-success' onClick={send}>Comprar</button>
            </div>
        </div>
    )
}
