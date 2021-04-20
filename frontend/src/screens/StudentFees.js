import React from 'react'
import './Student.css'
const StudentFees = () => {
  const formSubmit = (e) => {
    e.preventDefault()
    console.log('Search form submitted.')
  }
  const submitHandler = (e) => {
    e.preventDefault()
    console.log('Form submitted.')
  }
  return (
    <div className='container1'>
      <div className='search-form'>
        <h4>Search for Student to pay fees</h4>

        <form onSubmit={formSubmit}>
          <input className='first-input' type='text' />
          <select id='class'>
            <option value=''>Select Class</option>
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
          <input type='number' />
          <button className='btn-search' type='submit'>
            Search
          </button>
        </form>
      </div>
      <div className='outer-layout'>
        <h1>Student Fees Section</h1>
        <form onSubmit={submitHandler}>
          <div className='form-inner'>
            <div className='form-control'>
              <label for='name'>Student Name</label>
              <input type='text' />
            </div>
            {/* <div className='form-control'>
            <label for='name'>Full Name</label>
            <input type='text' />
          </div>{' '} */}
            <div className='form-control'>
              <label for='name'>Class</label>
              <select id='class'>
                <option value=''>Select</option>

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
              <label for='name'>Roll No</label>
              <input type='text' />
            </div>{' '}
            <div className='form-control'>
              <label for='name'>Monthly Fees</label>
              <input type='number' />
            </div>{' '}
            <div className='form-control'>
              <label for='name'>Hostel Fees</label>
              <input type='number' />
            </div>{' '}
            <div className='form-control'>
              <label for='name'>Laboratory Fees</label>
              <input type='number' />
            </div>{' '}
            <div className='form-control'>
              <label for='name'>Computer Fees</label>
              <input type='number' />
            </div>
            <div className='form-control'>
              <label for='name'>Exam Fees</label>
              <input type='number' />
            </div>{' '}
            <div className='form-control'>
              <label for='name'>Miscellaneous</label>
              <input type='number' />
            </div>
            {/* <div className="register-btn"> */}
            {/* </div> */}
          </div>
          <button className='btn-register' type='submit'>
            Submit Details
          </button>
        </form>
      </div>
    </div>
  )
}

export default StudentFees
