import React from 'react'
import './Student.css'
const StudentRegister = () => {
  const submitHandler = (e) => {
    e.preventDefault()
    console.log('Form submitted.')
  }
  return (
    <div className='container1'>
      <div className='outer-layout'>
        <h1>Register Student</h1>
        <form onSubmit={submitHandler}>
          <div className='form-inner'>
            <div className='form-control'>
              <label htmlFor='name'>Full Name</label>
              <input type='text' />
            </div>
            {/* <div className='form-control'>
            <label htmlFor='name'>Full Name</label>
            <input type='text' />
          </div>{' '} */}
            <div className='form-control'>
              <label htmlFor='name'>Email</label>
              <input type='email' />
            </div>{' '}
            <div className='form-control'>
              <label htmlFor='name'>Address</label>
              <input type='text' />
            </div>{' '}
            <div className='form-control'>
              <label htmlFor='name'>Gender</label>
              <select>
                <option value=''>Select</option>
                <option value='male'>Male</option>

                <option value='female'>Female</option>
                <option value='LKG'>Others</option>
              </select>
            </div>{' '}
            <div className='form-control'>
              <label htmlFor='name'>Class</label>
              <select id='class'>
                <option value='Nursery'>Select</option>

                <option value='Nursery'>Nursery</option>
                <option value='LKG'>LKG</option>
                <option value='UKG'>UKG</option>
                <option value='1'>1</option>

                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
                <option value='8'>8</option>
                <option value='9'>9</option>
                <option value='10'>10</option>
              </select>
            </div>{' '}
            <div className='form-control'>
              <label htmlFor='name'>Phone Number</label>
              <input type='text' />
            </div>{' '}
            <div className='form-control'>
              <label htmlFor='name'>Parent's Name</label>
              <input type='text' />
            </div>
            <div className='form-control'>
              <label htmlFor='name'>Joining Date</label>
              <input type='date' />
            </div>{' '}
            <div className='form-control'>
              <label htmlFor='name'>Age</label>
              <input type='text' />
            </div>
            <div className='form-control'>
              <label htmlFor='name'>
                Upload Picture
                <input className='avatar' type='file' size='60' />
              </label>
            </div>
            {/* <div className="register-btn"> */}
            {/* </div> */}
          </div>
          <button className='btn-register' type='submit'>
            Register Student
          </button>
        </form>
      </div>
    </div>
  )
}

export default StudentRegister
