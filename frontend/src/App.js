import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import { Button } from 'react-bootstrap'

const App = () => {
  return (
    <div>
      {/* <div className="container"></div> */}
      <Header />
      <Sidebar />
      <main>Main Content</main>
      {/* <Button className="btn btn-danger">Click Me!</Button> */}
      <Footer />
    </div>
  )
}

export default App
