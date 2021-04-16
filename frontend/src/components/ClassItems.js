import React from 'react'
import { Link } from 'react-router-dom'
const ClassItems = ({ classid, target }) => {
  return (
    <div className='class-list'>
      {/* <p>{classid}</p> */}
      <Link className="linker" to={target}>
        <p>{classid}</p>
      </Link>
    </div>
  )
}

export default ClassItems
