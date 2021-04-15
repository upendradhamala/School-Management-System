import React from 'react'
import './DashboardCard.css'
import Counter from './Counter'
const DashboardCard = ({ title, number, image }) => {
  return (
    <div className=''>
      <div className='card1'>
        <h1>{title}</h1>
        {/* a warning is being shown below for putting a div element inside a p tag element  */}
        {/* which is not allowed in some way  */}
        <div className="p">
          <Counter upperlimit={number} />
        </div>
        <img src={image} alt='No Image Data' />
      </div>
    </div>
  )
}

export default DashboardCard
