import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import NepaliDate from 'nepali-date-converter'

import Loader from '../components/Loader'
// import axios from 'axios'
import { studentSearch } from '../actions/studentActions'
const StudentFees = () => {
  const dispatch = useDispatch()
  const studentdetails = useSelector((state) => state.studentSearch)
  const { loading, student, error } = studentdetails
  const [name, setName] = useState('')
  const [classname, setClassname] = useState('')
  const [rollno, setRollno] = useState('')

  const formSubmit = async (e) => {
    e.preventDefault()
    dispatch(studentSearch(name, classname, rollno))

    // console.log(name, classname, rollno)
    // const { data } = await axios.get(
    //   `/api/students/search/${name}/${classname}/${rollno}`
    // )
    // console.log(data)
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
          <input
            className='first-input'
            type='text'
            value={name}
            placeholder='Enter the name of student'
            onChange={(e) => setName(e.target.value)}
            required
          />
          <select
            id='class'
            value={classname}
            onChange={(e) => setClassname(e.target.value)}
            required
          >
            <option value=''>Select Class</option>
            <option value='Nursery'>Nursery</option>
            <option value='LKG'>LKG</option>
            <option value='UKG'>UKG</option>
            <option value='One'>One</option>
            <option value='Two'>Two</option>
            <option value='Three'>Three</option>
            <option value='Four'>Four</option>
            <option value='Five'>Five</option>
            <option value='Six'>Six</option>
            <option value='Seven'>Seven</option>
            <option value='Eight'>Eight</option>
            <option value='Nine'>Nine</option>
            <option value='Ten'>Ten</option>
          </select>
          <input
            type='number'
            value={rollno}
            onChange={(e) => setRollno(e.target.value)}
            placeholder='Enter the roll no'
            required
          />
          <button className='btn-search' type='submit'>
            Search
          </button>
        </form>
      </div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger' message={error} />
      ) : (
        student && (
          <div className='outer-layout'>
            <h1>Student Fees Section</h1>
            <form onSubmit={submitHandler}>
              <div className='form-inner'>
                <div className='form-control'>
                  <label for='name'>Student Name</label>
                  <input type='text' value={student.student_name} />
                </div>
                {/* <div className='form-control'>
            <label for='name'>Full Name</label>
            <input type='text' />
          </div>{' '} */}
                <div className='form-control'>
                  <label for='name'>Class</label>
                  <select id='class' value={student.class}>
                    <option value=''>Select</option>

                    <option value='Nursery'>Nursery</option>
                    <option value='LKG'>LKG</option>
                    <option value='UKG'>UKG</option>
                    <option value='One'>One</option>
                    <option value='Two'>Two</option>
                    <option value='Three'>Three</option>
                    <option value='Four'>Four</option>
                    <option value='Five'>Five</option>
                    <option value='Six'>Six</option>
                    <option value='Seven'>Seven</option>
                    <option value='Eight'>Eight</option>
                    <option value='Nine'>Nine</option>
                    <option value='Ten'>Ten</option>
                  </select>
                </div>{' '}
                <div className='form-control'>
                  <label for='name'>Roll No</label>
                  <input type='number' value={student.roll_no} />
                </div>{' '}
                <div className='form-control'>
                  <label for='year'>Year</label>
                  <input
                    type='string'
                    value={new NepaliDate().format('YYYY')}
                  />
                </div>{' '}
                <div className='form-control'>
                  <label for='name'>Month</label>
                  <select id='class'>
                    <option value=''>Select Month</option>

                    <option value='Baisakh'>Baisakh</option>
                    <option value='Jestha'>Jestha</option>
                    <option value='Ashadh'>Ashadh</option>
                    <option value='Shrawan'>Shrawan</option>
                    <option value='Bhadra'>Bhadra</option>
                    <option value='Ashoj'>Ashoj</option>
                    <option value='Kartik'>Kartik</option>
                    <option value='Mangsir'>Mangsir</option>
                    <option value='Poush'>Poush</option>
                    <option value='Magh'>Magh</option>
                    <option value='Falgun'>Falgun</option>
                    <option value='Chaitra'>Chaitra</option>
                    {/* <option value='Ten'>Ten</option> */}
                  </select>
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
        )
      )}
    </div>
  )
}

export default StudentFees
