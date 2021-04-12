import React,{useState} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import { Button } from 'react-bootstrap'
import Main from './components/Main'
const App = () => {
  const [sidebarOpen, setsidebarOpen] = useState(false)
  const openSidebar = () => {
    setsidebarOpen(true)
  }
  const closeSidebar = () => {
    setsidebarOpen(false)
  }
  return (
    <div className="containers">
      {/* <div className="container"></div> */}
      <Header sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
      <Main/>
      {/* <Button className="btn btn-danger">Click Me!</Button> */}
      {/* <Footer /> */}
    </div>
  )
}

export default App
