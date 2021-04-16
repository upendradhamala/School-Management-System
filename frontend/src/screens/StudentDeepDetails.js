import React from 'react'
import { Link } from 'react-router-dom'
import classes from '../ClassData'

import ClassItems from '../components/ClassItems'
const StudentDetails = () => {
  const searchSubmit = (e) => {
    e.preventDefault()
    console.log('clicked')
    // alert("Search icon is clicked.")
  }
  return (
    <div className='container3'>
      <div className='outer'>
        <input type='text' placeholder='Search for student...' />
        <span className='search-icon' onClick={searchSubmit}>
          <i className='fas fa-search'></i>
        </span>
        <div className='table-layout'>
          <table>
            <tr>
              <th>SN</th>
              <th>Photo</th>
              <th>Student Name</th>
              <th>Class</th>
              <th>Roll No</th>
              <th>Address</th>
              <th>Parent's Name</th>
              <th>Contact No</th>
              <th>Previous Dues</th>
              <th>Gender</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
            <tr>
              <td>Jill</td>
              <td>Smith</td>
              <td>50</td>
            </tr>
            
          </table>
        </div>
      </div>
    </div>
  )
}

export default StudentDetails
