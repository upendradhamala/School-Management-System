import React, { useState, useEffect } from 'react'
import Loader from '../components/Loader'
import axios from 'axios'
import './Main.css'
import DashboardCard from './DashboardCard'
import Footer from './Footer'
const Main = () => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState()
  useEffect(() => {
    //  console.log("this is me upendra dhamala.")
    // await axios.get('/api/students/:classes')
    const fetchItems = async () => {
      setLoading(true)
      const { data } = await axios.get('/dashboard')
      setLoading(false)
      console.log(data)
      setItems(data)
    }
    fetchItems()
  }, [])

  return (
    <main>
      <div className='main__container'>
        {loading ? (
          <Loader />
        ) : (
          <div className='card-handler'>
            {/* {loading? <Loader/
   {}>} */}
            {/* {console.log('dfsdf')} */}
            {/* {loading ? <Loader/>: } */}
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
        )}
      </div>

      {!loading && <Footer />}
    </main>
  )
}

export default Main
