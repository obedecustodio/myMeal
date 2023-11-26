import $ from 'jquery'
import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Wait = () => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('user.id')
    const userName = localStorage.getItem('user.name')
    console.log(userId)

    useEffect(() => {
        get()
    }, [])

    const get = () => {
        $.ajax({
            url: 'http://127.0.0.1:8000/api/teste',
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
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
    const remove = (id) => {
         $.ajax({
            url: `http://127.0.0.1:8000/api/teste/${id}`,
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            dataType: 'json',
            success: (data) => {
                console.log('Data received:', data);
                get()
            },
            error: (error) => {
                console.error('Error:', error);
            },
        });
    }



    const [data, setData] = useState([])


    return (
        <div className='container-fluid'>
            <div className="col-12">
                <h1 className='text-warning text-center p-5'>Pedidos</h1>
            </div>
            <table className="table table-warning table-borderless">
                <thead>
                    <tr>
                        <td><h3>Item</h3></td>
                        <td><h3>Preco</h3></td>
                        <td><h3>Propetario</h3></td>
                        <td><h3>Estado</h3></td>
                    </tr>
                </thead>
                <tbody className='p3'>



                    {data.map((data) => (
                        
                        userId == data.user_id ? (
                            <tr key={data.id}>

                                <td className='p-1'>{data.items}</td>
                                <td className='p-1'>

                                    {data.price},00 MZN
                                </td>
                                <td className='p-1'>{data.owner}</td>
                                <td className='p-1'>
                                    <p className={
                                        data.status === 'new' ? "alert alert-primary d-flex justify-content-between"
                                            : data.status === 'preparando' ? "alert alert-secondary d-flex justify-content-between"
                                                : data.status === 'pronto' ? "alert alert-info d-flex justify-content-between"
                                                    : data.status === 'entregue' ? "alert alert-success d-flex justify-content-between" : ''}>
                                        {data.status}
                                        {data.status !== 'pronto' ? <button className='btn btn-danger' onClick={() => remove(data.id)}><FontAwesomeIcon icon="fa-solid fa-trash" /></button> : ''}

                                    </p>



                                </td>
                            </tr>
                        ) : ''
                    ))}


                </tbody>
            </table>
        </div>
    )
}
