import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Main.css'
import DashboardCard from './DashboardCard'
import Footer from './Footer'
// import items from '../Data'
const Main = () => {
  const [items, setItems] = useState([])
  useEffect(() => {
    //  console.log("this is me upendra dhamala.")
    // await axios.get('/api/students/:classes')
    const fetchItems = async () => {
      const { data } = await axios.get('/dashboard')
      console.log(data)
      setItems(data)
    }
    fetchItems()
  }, [])
  return (
    <main>
      <div className='main__container'>
        <div className='card-handler'>
          {items.map((item) => (
            // <div key={item._id}>
            <DashboardCard
              key={item?._id}
              takeme={item?.takeme}
              title={item?.title}
              number={item?.number}
              image={item?.image}
            />
            // </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default Main
