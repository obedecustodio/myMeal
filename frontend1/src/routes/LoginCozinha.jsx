import '../App.css'
import React, { useState } from 'react'
import useAuth from '../hooks/useAuth'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import $ from 'jquery'

export const LoginCozinha = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/"
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [err, setErr] = useState(0)
    const [message, setMessage] = useState("")
    const data = {
        email,
        password
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === "") {
            setErr(e => 1)
            setMessage(m => "Por favor insira a senha")
        } else if (email === "") {
            setErr(e => 1)
            setMessage(m => "Por favor insira o email")
        } else {
            console.log(JSON.stringify(data))
            $.ajax({
                url: 'http://127.0.0.1:8000/api/logine',
                method: 'POST',
                data: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                },
                success: (data) => {
                    // console.log('Data sent and received:', data);
                    console.log(data.user)
                    localStorage.setItem('isAuthE', 'true');
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('user.id', data.user.id);
                    localStorage.setItem('user.name', data.user.name);
                    navigate("/cozinha")
                },
                error: (error) => {
                    console.error('Error:', error);
                },
            });
        }
    }
    return (
        <div className='container' id='form'>
            <div className="row">
                <div className="col-12 text-center">
                    <h1 className='text-warning'> Login</h1>
                </div>
            </div>
            <form className='mt-5'>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Endereço Email</label>
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <div id="emailHelp" className="form-text">A sua informação nunca será partilhada.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <div id="emailHelp" className="form-text">
                        precisa de uma conta?<Link to="/register" className='text-primary' id='link'> Cadastre-se</Link>
                    </div>
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
                <div className='text-center'>
                    <button type="submit" className="btn btn-warning" onClick={handleSubmit}>Login</button>
                </div>
            </form>
        </div>
    )
}
