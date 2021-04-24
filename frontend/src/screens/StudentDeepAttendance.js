import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { classlistStudent, studentAttendances } from '../actions/studentActions'
import {STUDENT_ATTENDANCE_RESET} from '../constants/studentConstants'
import NepaliDate from 'nepali-date-converter'
import Loader from '../components/Loader'
import Message from '../components/Message'
const StudentDeepAttendance = ({ match }) => {
  const matchid = match.params.class
  const [studentlist, setStudentlist] = useState([])
  const [present, setPresent] = useState(false)
  const dispatch = useDispatch()
  const [clicked, setClicked] = useState(false)
  const studentAttendance = useSelector((state) => state.studentAttendance)
  const {
    loading: loadingattendance,
    students: studentsattendance,
    error: errorattendance,
  } = studentAttendance
  const studentClassList = useSelector((state) => state.studentClassList)
  const { loading, students, error } = studentClassList

  const studentsfinal = students && [...students]

  for (i = 0; i < studentsfinal && studentsfinal.length; i++) {
    studentsfinal[i].attendance = false
  }

  useEffect(() => {
    dispatch({
      type:STUDENT_ATTENDANCE_RESET
    })
    dispatch(classlistStudent(matchid))
  }, [dispatch, matchid])
  var i = 1
  const submitAttendance = () => {
    // console.log(studentlist)
    dispatch(studentAttendances(matchid, studentlist))
    console.log('done')
  }
  const toggleAttendance = (id) => {
    var x = JSON.parse(localStorage.getItem(matchid))

    setClicked(true)

    setPresent(!present)

    const newStudentsList = x ? [...x] : [...studentsfinal]
    const element = newStudentsList.findIndex((elem) => elem._id == id)
    newStudentsList[element] = {
      ...newStudentsList[element],
      attendance: !present,
    }
    // console.log('later value', present)
    // console.log(newStudentsList)

    setStudentlist(newStudentsList)
    localStorage.setItem(matchid, JSON.stringify(newStudentsList))
  }

  return (
    <div className='container1'>
      <div className='attendance-outer'>
        <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>
          Attendance for the date of{' '}
          <span style={{ background: 'red' }}>
            {new NepaliDate().format('YYYY-MM-D')}
          </span>{' '}
        </h1>
        {studentsattendance &&  (
          <Message variant='success' message='Successfully taken' />
        )}
        {errorattendance && (
          <Message variant='danger' message={errorattendance} />
        )}
        <br />
        {loadingattendance && <Loader />}
        {loading ? (
          <loader />
        ) : error ? (
          <Message variant='danger' message={error} />
        ) : (
          <table style={{ margin: 'auto', background: 'green' }}>
            <thead>
              <tr>
                <th>SN</th>
                <th>Student Name</th>
                <th>Roll No</th>
                <th>Attendance</th>
              </tr>
            </thead>
            <tbody>
              {console.log(present)}
              {clicked
                ? studentlist.map((student) => (
                    <tr key={student._id} className='attendance'>
                      <td>{i++}</td>
                      <td>{student.student_name}</td>
                      <td>{student.roll_no}</td>
                      <td
                        onClick={() => toggleAttendance(student._id)}
                        className={student.attendance ? 'present' : 'absent'}
                        style={{ cursor: 'pointer' }}
                      >
                        {student.attendance ? 'Present' : 'Absent'}
                      </td>
                    </tr>
                  ))
                : studentsfinal &&
                  studentsfinal.map((student) => (
                    <tr key={student._id} className='attendance'>
                      <td>{i++}</td>
                      <td>{student.student_name}</td>
                      <td>{student.roll_no}</td>
                      <td
                        onClick={() => toggleAttendance(student._id)}
                        className={student.attendance ? 'present' : 'absent'}
                        style={{ cursor: 'pointer' }}
                      >
                        {student.attendance ? 'Present' : 'Absent'}
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        )}
        <button
          onClick={submitAttendance}
          style={{ marginTop: '10px', maxWidth: '30%', display: 'block' }}
          className='btn-register'
        >
          Submit
        </button>
      </div>
    </div>
  )
}

export default StudentDeepAttendance
