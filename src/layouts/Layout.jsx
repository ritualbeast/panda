import React from 'react'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Menu from '../components/Menu'

const Layout = () => {
  return (
    <>
        <Header />
        <Menu />
        <Outlet />
        <Footer />
        
    </>
  )
}

export default Layout
