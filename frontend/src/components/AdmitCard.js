import React from 'react'

const AdmitCard = ({ examination, name, classname, rollno, image }) => {
  return (
    <div className='admitCard'>
      <div className='admitCardTop'>
        <img src='/images/schoollogo.jpeg' alt='logo' />
        <div className='schooldetails'>
            <h2>Hope International Academy</h2>
          <h4>{examination}</h4>
        </div>
      </div>
      {/* <h2>Student Details</h2> */}
      <div className='admitCardMiddle'>
        <h3 style={{ textAlign: 'center' }}>Student Details</h3>
        <div className='details'>
          <div className='left-details'>
            <p>Name</p>
            <p>Class</p>
            <p>Roll No</p>
          </div>
          <div className='right-details'>
            <p>{name}</p>
            <p>{classname}</p>
            <p>{rollno}</p>
          </div>
          <img src={image} alt='' />
        </div>
      </div>
      <div className='admitCardBottom' style={{ textAlign: 'center' }}>
        <h4>In case any problem occurs, contact your school.</h4>
        {/* <h4>In case any problem occurs, contact your school.</h4> */}

      </div>
    </div>
  )
}

export default AdmitCard
