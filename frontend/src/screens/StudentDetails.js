import React from 'react'
import { Link } from 'react-router-dom'
import classes from '../ClassData'

import ClassItems from '../components/ClassItems'
const StudentDetails = () => {
  return (
    <div className='container2'>
      <div className='outer'>
        <input type='text' placeholder='Search for student...' />
        <span className='search-icon'>
          <i className='fas fa-search'></i>
        </span>
        <h3>Browse By Class</h3>
        <div className='classes'>
          {classes.map((classname) => (
            <ClassItems key={classname._id} target={classname.target}  classid={classname.class} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default StudentDetails
