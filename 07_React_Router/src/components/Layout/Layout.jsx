/* eslint-disable no-unused-vars */
import React from 'react'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'

function Layout() {
  return (
    <>

    < Header /> 
    < Outlet />
    <Footer /> 
    </>
  )
}

export default Layout
