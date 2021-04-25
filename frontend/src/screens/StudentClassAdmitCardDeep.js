import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listStudents } from '../actions/studentActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { AdmitCard } from '../components/AdmitCard'
import { classlistStudent } from '../actions/studentActions'
import './admitcard.css'
import { STUDENT_CLASS_LIST_CLEAR } from '../constants/studentConstants'
// import StudentClassAdmitCard from './StudentClassAdmitCard'
const StudentClassAdmitCardDeep = ({ match }) => {
  const matchid = match.params.id

  const dispatch = useDispatch()
  const studentClassList = useSelector((state) => state.studentClassList)
  const { loading, students, error } = studentClassList

  const Print = () => {
    window.print()
  }
  useEffect(() => {
    dispatch({
      type: STUDENT_CLASS_LIST_CLEAR,
    })
    dispatch(classlistStudent(matchid))
  }, [dispatch])
  return (
    <div className='container1'>
      <div className='exam'></div>
      {loading && <Loader />}
      {error && <Message variant='danger' message={error} />}
      {students &&
        students.map((student) => (
          <div key={student._id} className='arrange'>
            <AdmitCard
              examination='Terminal Examination'
              name={student.student_name}
              classname={student.classname}
              rollno={student.roll_no}
              image={student.image}
            />
          </div>
        ))}
      {students && (
        <div className='la'>
          <button onClick={Print} className='printcmd'>
            Print All
          </button>
        </div>
      )}
    </div>
  )
}

export default StudentClassAdmitCardDeep
