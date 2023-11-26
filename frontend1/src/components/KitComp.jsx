import $ from 'jquery'
import Pedido from './Pedido';
import React, { useState, useEffect } from 'react'

export const KitComp = () => {
    const token = localStorage.getItem('token');

    useEffect(() => {
        get()
    }, [])

    const get = async () => {
        await $.ajax({
            url: 'http://127.0.0.1:8000/api/teste',
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            dataType: 'json',
            success: (data) => {
                console.log('Data received:', data);
                setData(prev => {
                    const updated = data;

                    return updated;
                })

            },
            error: (error) => {
                console.error('Error:', error);
            },
        });
    }


    const [data, setData] = useState([])


    return (
        <div>
            <div className="col-12">
                <h1 className='text-warning text-center p-5'>Pedidos</h1>
            </div>



            <div className="container">
                <div className="row alert alert-secondary">
                    <div className="col-3"><h3>Item</h3></div>
                    <div className="col-3"><h3>Preco</h3></div>
                    <div className="col-3"><h3>Propretario</h3></div>
                    <div className="col-3"><h3>Estado</h3></div>
                </div>
                
                    {data.map((data) => (
                        <div className="row alert alert-warning" key={data.id}>
                            <Pedido data={data}/>
                        </div>
                    ))}

            </div>
            <div className="row alert alert-warning">
                <div className='col-3'>
                    <h4>Pedidos pendentes: </h4>
                    <p>10</p>
                </div>
                <div className='col-3'>
                    <h4>Pedidos entregues: </h4>
                    <p>10</p>
                </div>
                <div className='col-3'>
                    <h4>Pedidos prontos: </h4>
                    <p>10</p>
                </div>
                <div className='col-3'>
                    <h4>Total de Pedidos: </h4>
                    <p>10</p>
                </div>
            </div>
        </div>
    )
}
