import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import ReactToPrint from 'react-to-print'
// import './particularprint.css'
import './Student.css'
import { AdmitCard } from '../components/AdmitCard'

import Loader from '../components/Loader'
// import axios from 'axios'

import { STUDENT_SEARCH_CLEAR } from '../constants/studentConstants'

import { studentSearch } from '../actions/studentActions'
const ParticularStudentAdmitCard = () => {
  const componentRef = useRef()

  const dispatch = useDispatch()
  const studentdetails = useSelector((state) => state.studentSearch)
  const { loading, student, error } = studentdetails
  const [name, setName] = useState('')
  const [classname, setClassname] = useState('')
  const [rollno, setRollno] = useState('')
  const print = () => {
    window.print()
  }
  const formSubmit = async (e) => {
    e.preventDefault()
    dispatch(studentSearch(name, classname, rollno))
  }
  // const style =
  // Adding media querry..
  // {`@media print {.contacts{display: none;}}`}

  useEffect(() => {
    dispatch({
      type: STUDENT_SEARCH_CLEAR,
    })
  }, [dispatch])

  return (
    <div className='container1'>
      {/* <style>{`@media print {.contacts{display: none;}}`}</style> */}
      {/* following is the thing  I have been searching from the morning  */}
      <style>{`@media print {    @page { size: 110mm 54.5mm; }}`}</style>
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
      <div className='exam'></div>
      {loading && <Loader />}
      {error && <Message variant='danger' message={error} />}

      <div className='arrange'>
        {student && (
          <div className='prints'>
            <AdmitCard
              className='print'
              examination='Terminal Examination'
              name={student.student_name}
              classname={student.classname}
              rollno={student.roll_no}
              image={student.image}
              ref={componentRef}
            />
          </div>
        )}
      </div>
      <div className='printCMD'>
        {student && (
          <ReactToPrint
            trigger={() => (
              <button className='printcmd'>Print this out!</button>
            )}
            content={() => componentRef.current}
          />
        )}
      </div>
    </div>
  )
}

export default ParticularStudentAdmitCard
