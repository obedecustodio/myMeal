import React from 'react'
import Select from 'react-select';
import { useState } from 'react';

export default function Pedido({data}) {
    const token = localStorage.getItem('token');
    const [selectedValue, setSelectedValue] = useState()
    const Options = [
        { value: 'preparando', label: 'Preparando' },
        { value: 'pronto', label: 'Pronto' },
    ]

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
    
    return (
        <div className='row'>
                <div className="col-3">{data.items}</div>
                <div className="col-3">{data.price}</div>
                <div className="col-3">{data.owner}</div>
                <div className="col-3"> <Select onChange={(selectedOption) => handleSelectChange(selectedOption, data.id)}

                    options={Options}
                    value={selectedValue}
                    defaultValue={{ value: data.status, label: data.status }} /></div>
        </div>
    )
}
