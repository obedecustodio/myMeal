import React, { useState } from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom'
import $ from 'jquery'
export const Sign = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [name, setNome] = useState("")
    const [password, setPassword] = useState("")
    const [contact, setContact] = useState("")
    const [confirm, setConfirm] = useState("")
    const [err, setErr] = useState(0)
    const [message, setMessage] = useState()
    const data = {
        name,
        email,
        password,
    }
    const send = (e) => {
        e.preventDefault()
        if (password !== confirm) {
            setErr(e => 1)
            setMessage(m => "A sua senha não foi confirmada, por favor insire senhas iguais")
        }
        if (name === "") {
            setErr(e => 1)
            setMessage(m => "Por favor insira o nome")
        }
        if (email === "") {
            setErr(e => 1)
            setMessage(m => "Por favor insira o email")
        }
        if (password === "") {
            setErr(e => 1)
            setMessage(m => "Por favor insira o password")
        }
        if (contact === "") {
            setErr(e => 1)
            setMessage(m => "Por favor insira o contacto")
        }
        if (confirm === "") {
            setErr(e => 1)
            setMessage(m => "Por favor confirme a sua senha")
        }
        setErr(e => 2)

        $.ajax({
            url: 'http://127.0.0.1:8000/api/sign',
            method: 'POST',
            data: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
            success: (data) => {
                navigate("/login");
            },
            error: (error) => {
                console.error('Error:', error);
            },
        });
    }

    return (
        <div className='container' id='formSign'>
            <div className="row">
                <div className="col-12 text-center">
                    <h1 className='text-warning'> Cadastro </h1>
                </div>
            </div>
            <form className='mt-5' >
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Nome</label>
                    <input type="text" className="form-control" value={name} onChange={(e) => setNome(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Endereço Email</label>
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <div id="emailHelp" className="form-text">A sua informação nunca será partilhada.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Contacto</label>
                    <input type="number" className="form-control" value={contact} onChange={(e) => setContact(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Confirme a password</label>
                    <input type="password" className="form-control" value={confirm} onChange={(e) => setConfirm(e.target.value)} />
                </div>
                {
                    err == 1 ?
                        (
                            <div className="alert alert-danger">
                                <p className='text-danger'>{message}</p>
                            </div>
                        )
                        :
                        ''
                }
                {
                    err == 2 ?
                        (
                            <div className="alert alert-success">
                                <p className='text-success'>Cadastro feito com sucessso, está sendo redicionado para o login</p>
                            </div>
                        )
                        :
                        ''
                }
                <div className='text-center'>
                    <button type="submit" className="btn btn-warning" onClick={send}>Cadastrar-se</button>
                </div>
            </form>
        </div>
    )
}
