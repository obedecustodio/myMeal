import React, { useState, useEffect } from 'react'
import $, { event } from 'jquery'
import Select from 'react-select';

export const Control = () => {
    const token = localStorage.getItem('token');
    const [selectedValue, setSelectedValue] = useState()
    const Options = [
        { value: 'entregue', label: 'entregue' }
    ]
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
    const handleSelectChange = (selectedOption, id) => {
        setSelectedValue(selectedOption);
        const dataToUpdate = { status: selectedOption.value };
        const res = fetch(`http://127.0.0.1:8000/api/teste/${id}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataToUpdate)
        })
    };
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
                        <tr key={data.id}>
                            <td className='p-1'>{data.items}</td>
                            <td className='p-1'>
                                {data.price}
                            </td>
                            <td className='p-1'>{data.owner}</td>
                            <td className='p-1'>
                                {
                                    data.status === 'pronto' ?
                                        <Select onChange={(selectedOption) => handleSelectChange(selectedOption, data.id)}
                                            options={Options}
                                            value={selectedValue}
                                            defaultValue={{ value: data.status, label: data.status }}
                                        />
                                        :
                                        <p className={data.status === 'new'? "alert alert-primary" 
                                        : data.status === 'preparando' ? "alert alert-secondary"
                                        : data.status === 'entregue' ? "alert alert-success" : ''}>{data.status}</p>
                                }
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
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
