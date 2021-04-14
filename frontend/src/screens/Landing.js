import React,{useState} from 'react'
import Header from '../components/Header'
// import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import Main from '../components/Main'
import './Landing.css'
const Landing = () => {
  const [sidebarOpen, setsidebarOpen] = useState(false)
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
      {/* <Footer/> */}
    </div>
  )
}

export default Landing
