import $ from 'jquery'
import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Outro from '../components/Outro'

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
        <div className='container'>
            <div className="col-12">
                <h1 className='text-warning text-center p-5'>Pedidos</h1>
            </div>

            <div className="row alert alert-primary">
                <div className="col-3">Item</div>
                <div className="col-3">Preco</div>
                <div className="col-3">Propretario</div>
                <div className="col-3">Estado</div>
            </div>
            
                    {data.map((data) => (

                        
                        
                       <Outro data = {data}/>
                    ))}
        </div>
    )
}
