import React from 'react'
import NavBar from '../NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import ScrollToTop from '../ScrollToTop/ScrollToTop'

const Root = () => {
    return (
        <div>
            <ScrollToTop />
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Root
