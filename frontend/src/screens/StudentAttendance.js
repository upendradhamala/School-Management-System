import React from 'react'
import { Link } from 'react-router-dom'
// import classes from '../ClassData'

import ClassItems from '../components/ClassItems'
const StudentAttendance = () => {
  const searchSubmit = (e) => {
    e.preventDefault()
    console.log('clicked')
    // alert("Search icon is clicked.")
  }
  return (
    <div className='container2'>
      <div className='outer'>
        <h3>Select the Class</h3>

        {/* <input type='text' placeholder='Search for student...' />
        <span className='search-icon' onClick={searchSubmit}>
          <i className='fas fa-search'></i>
        </span> */}
{/* 
        <div className='classes'>
          {classes.map((classname) => (
            <ClassItems
              key={classname._id}
              target={classname.target}
              classid={classname.class}
            />
          ))}
        </div> */}
      </div>
    </div>
  )
}

export default StudentAttendance
