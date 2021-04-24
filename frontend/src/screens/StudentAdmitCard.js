import React from 'react'
import { Link } from 'react-router-dom'
const StudentAdmitCard = () => {
  return (
    <div className='container1'>
      <div className='admitCard-outer'>
        {/* button is an inline element */}
        <Link className='link' to='/admit_card/allstudents'>
          Print admit card of all students
        </Link>
        <Link className='link' to='/admit_card/classes'>
          Print admit card of particular class
        </Link>
        <Link className='link' to='/admit_card/student'>
          Print admit card of particular student
        </Link>
      </div>
    </div>
  )
}

export default StudentAdmitCard
