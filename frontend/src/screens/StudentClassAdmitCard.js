import React, { useState, useEffect } from 'react'
import Classes from '../screens/classData'
import axios from 'axios'
import ClassItems from '../components/ClassItems'
const StudentClassAdmitCard = () => {
  console.log(Classes)
  const searchSubmit = (e) => {
    e.preventDefault()
    console.log('clicked')
    // alert("Search icon is clicked.")
  }
  return (
    <div className='container2'>
      <div className='outer'>
        {/* <input type='text' placeholder='Search for student...' />
        <span className='search-icon' onClick={searchSubmit}>
          <i className='fas fa-search'></i>
        </span> */}
        <h3>Select Class to print Admit Card</h3>
        <div className='classes'>
          {Classes.map((classinfo) => (
            <ClassItems
              key={classinfo._id}
              target={`/admit_card/classes/${classinfo.classname}`}
              //  target=
              classid={classinfo.classname}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default StudentClassAdmitCard
