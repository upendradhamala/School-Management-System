import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Main from '../components/Main'
import './Landing.css'

const Landing = ({ history }) => {
  const [sidebarOpen, setsidebarOpen] = useState(false)
  const userLogin = useSelector((state) => state.userLogin)
  const { userCred } = userLogin
  const openSidebar = () => {
    setsidebarOpen(true)
  }
  const closeSidebar = () => {
    setsidebarOpen(false)
  }

  return (
    <div className='containers'>
      <Header sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
      <Main />
    </div>
  )
}

export default Landing
