import React from 'react'
import Loader from './Loader'
const underConstruction = () => {
  return (
    <div style={{margin:"50px", textAlign:"center"}}>
      Under Construction...
      <Loader />
    </div>
  )
}

export default underConstruction
