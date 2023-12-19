import React from 'react'
import NavBar from '../NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import Banner from '../Banner/Banner'

const Home = () => {
  return (
    <div>
        <NavBar />
        <Banner />
        <Outlet />
      
    </div>
  )
}

export default Home
