import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Pedido({ data }) {

    return (
        <div className='row alert alert-warning'>
            <div className="col-3">{data.items}</div>
            <div className="col-3">{data.price}</div>
            <div className="col-3">{data.owner}</div>
            <div className="col-3">
                    <p className={
                        data.status === 'new' ? "alert alert-primary d-flex justify-content-between"
                            : data.status === 'preparando' ? "alert alert-secondary d-flex justify-content-between"
                                : data.status === 'pronto' ? "alert alert-info d-flex justify-content-between"
                                    : data.status === 'entregue' ? "alert alert-success d-flex justify-content-between" : ''}>
                        {data.status}
                        {data.status !== 'pronto' ? <button className='btn btn-danger' onClick={() => remove(data.id)}><FontAwesomeIcon icon="fa-solid fa-trash" /></button> : ''}
                    </p>
            </div>
        </div>
    )
}
