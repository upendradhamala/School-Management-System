import React from 'react'
import './StudentRegister.css'
const StudentRegister = () => {
  const submitHandler = (e) => {
    e.preventDefault()
    console.log('Form submitted.')
  }
  return (
    <div class='container1'>
      <div className='outer-layout'>
        <h1>Register Student</h1>
        <form onSubmit={submitHandler}>
          <div className='form-control'>
            <label for='name'>Full Name</label>
            <input type='text' />
          </div>
          {/* <div className='form-control'>
            <label for='name'>Full Name</label>
            <input type='text' />
          </div>{' '} */}
          <div className='form-control'>
            <label for='name'>Email</label>
            <input type='email' />
          </div>{' '}
          <div className='form-control'>
            <label for='name'>Address</label>
            <input type='text' />
          </div>{' '}
          <div className='form-control'>
            <label for='name'>Class</label>
            <input type='text' />
          </div>{' '}
          <div className='form-control'>
            <label for='name'>Phone Number</label>
            <input type='text' />
          </div>{' '}
          <div className='form-control'>
            <label for='name'>Parent's Name</label>
            <input type='text' />
          </div>
          <div className='form-control'>
            <label for='name'>Joining Date</label>
            <input type='date' />
          </div>{' '}
          <div className='form-control'>
            <label for='name'>Age</label>
            <input type='text' />
          </div>
          <div className='form-control'>
            <label for='name'>Profile Pic</label>
            <input type='file' />
          </div>
          <br />
          {/* <div className="register-btn"> */}
          <button className='btn-register' type='submit'>
            Register Student
          </button>
          {/* </div> */}
        </form>
      </div>
    </div>
  )
}

export default StudentRegister
