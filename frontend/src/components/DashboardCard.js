import React from 'react'
import './DashboardCard.css'
const DashboardCard = ({ title, number, image }) => {
  return (
    <div className=''>
      <div className='card1'>
        <h1>{title}</h1>
        <p>{number}</p>
        {image}
      </div>
    </div>
  )
}

export default DashboardCard
