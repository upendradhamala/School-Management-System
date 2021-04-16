import React from 'react'
import { Link } from 'react-router-dom'
import classes from '../ClassData'
import TableFill from '../components/TableFill'
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
            <thead>
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
            </thead>
            <tbody>
              {console.log(classes)}
              {classes.map((data) => (
                <tr key={data._id} className='contents'>
                  <td>{data._id}</td>
                  <td>
                    <img style={{ height: '50px' }} src={data.image} alt='' />
                  </td>
                  <td>{data.student_name}</td>
                  <td>{data.class}</td>
                  <td>{data.roll_no}</td>
                  <td>{data.address}</td>
                  <td>{data.parents_name}</td>
                  <td>{data.contact_no}</td>
                  <td>{data.previous_dues}</td>
                  <td>{data.gender}</td>
                  <td>
                    <i
                      style={{
                        padding: '8px',
                        color: 'green',
                        fontSize: '25px',
                      }}
                      className='fas fa-user-edit'
                    ></i>
                  </td>
                  <td>
                    <i
                      style={{ padding: '8px', color: 'red', fontSize: '25px' }}
                      className='fas fa-trash'
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default StudentDetails
