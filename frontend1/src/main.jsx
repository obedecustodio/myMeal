import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'

library.add(fas, faTwitter, faFontAwesome,)

// configurando o router

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { DataProvider } from './providers/Data.jsx'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     errorElement: <Error/>,
//     children:[
//       {
//         path: 'contact',
//         element: <Contact/>
//       },
//       {
//         path: '/',
//         element: <Home teste = {teste}/>
//       },
//       {
//         path: 'purchase',
//         element: <Purschase/>
//       },
//       {
//         path: 'kit',
//         element: <Kit/>
//       },
//       {
//         path: 'api',
//         element: <Api/>
//       },
//       {
//         path: 'login',
//         element: <Login/>
//       },
//       {
//         path: 'sign',
//         element: <Sign/>
//       },
//     ]
//   },
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        {/* <AuthProvider> */}
      <DataProvider>
          <Routes>
            <Route path='/*' element={<App />} />
          </Routes>
      </DataProvider>
        {/* </AuthProvider> */}
    </BrowserRouter>
  </React.StrictMode>,
)
