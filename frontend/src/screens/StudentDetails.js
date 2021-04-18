import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import classes from '../ClassData'
import axios from 'axios'
import ClassItems from '../components/ClassItems'
const StudentDetails = () => {
  const [classes, setClasses] = useState([])
  useEffect(() => {
    const getClasses = async () => {
      //the following request to the backend fetches all the student details
      const { data } = await axios.get('/api/classes')
      setClasses(data)
    }
    getClasses()
  }, [])
  const searchSubmit = (e) => {
    e.preventDefault()
    console.log('clicked')
    // alert("Search icon is clicked.")
  }
  return (
    <div className='container2'>
      <div className='outer'>
        <input type='text' placeholder='Search for student...' />
        <span className='search-icon' onClick={searchSubmit}>
          <i className='fas fa-search'></i>
        </span>
        <h3>Browse By Class</h3>
        <div className='classes'>
          {classes.map((classname) => (
            <ClassItems
              key={classname._id}
              target={`/student_details/details/${classname._id}`}
              //  target=
              classid={classname.class}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default StudentDetails
