import { Outlet } from 'react-router-dom'

// navegacao
import { Navbar } from './Navbar'
import { Footer } from './Footer'

function Layout() {

    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout