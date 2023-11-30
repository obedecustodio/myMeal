import './App.css'
import "./index.css"
import { Kit } from './routes/Kit.jsx'
import { Home } from './routes/Home.jsx'
import { Wait } from './routes/Wait.jsx'
import { Sign } from './routes/Sign.jsx'
import { Error } from './routes/Error.jsx'
import { Login } from './routes/Login.jsx'
import Layout from './components/Layout.jsx'
import { Control } from './routes/Control.jsx'
import { Contact } from './routes/Contact.jsx'
import { Routes, Route } from 'react-router-dom'
import { Purschase } from './routes/Purschase.jsx'
import { LoginRecep } from './routes/LoginRecep.jsx'
import RequireAuth from './components/requireAuth.jsx'
import RequireAuthE from './components/RequireAuthE.jsx'
import { LoginCozinha } from './routes/LoginCozinha.jsx'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />}/>
        <Route path='menu' element={<Contact />}/>
        <Route path='loginrec' element={<LoginRecep />}/>
        <Route path='logincoz' element={<LoginCozinha />}/>

        <Route element={<RequireAuthE />}>
          <Route path='cozinha' element={<Kit />} />
          <Route path='control' element={<Control />} />
        </Route>

        <Route path='*' element={<Error />} />
        <Route path='register' element={<Sign />} />

        <Route element={<RequireAuth />}>
          <Route path='espera' element={<Wait />} />                             
          <Route path='cart' element={<Purschase />} />
        </Route>

      </Route>
    </Routes>
  )
}

export default App
