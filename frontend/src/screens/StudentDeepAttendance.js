import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { classlistStudent, studentAttendances } from '../actions/studentActions'
import { STUDENT_ATTENDANCE_RESET } from '../constants/studentConstants'
import NepaliDate from 'nepali-date-converter'
import Loader from '../components/Loader'
import Message from '../components/Message'
import axios from 'axios'
import './Student.css'
const StudentDeepAttendance = ({ match }) => {
  const matchid = match.params.class
  const [studentlist, setStudentlist] = useState([])
  const [present, setPresent] = useState({})
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

  // for (i = 0; i < studentsfinal && studentsfinal.length; i++) {
  //   studentsfinal[i].attendance = false
  // }
  useEffect(() => {
    const studentsAttend = async () => {
      const { data } = await axios.get(
        `/api/students/class/${matchid}/attendance`
      )
      setStudentlist(data.students)
      // console.log('attended once', data)
    }
    studentsAttend()
    dispatch({
      type: STUDENT_ATTENDANCE_RESET,
    })
    dispatch(classlistStudent(matchid))
  }, [dispatch, matchid])
  var i = 1
  const submitAttendance = () => {
    // console.log(studentlist)
    console.log('students list', students)
    dispatch(studentAttendances(matchid, students))
  }
  const toggleAttendance = (id) => {
    setPresent((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
    const new_students = students.filter((datum) => datum._id === id)
    // console.log('new_students', new_students)
    new_students[0].present = !present[id]
    console.log('students', students)
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
        {studentlist.length > 0 && (
          <h3
            style={{ textAlign: 'center', background: 'red', padding: '3px' }}
          >
            Attendance already taken for today
          </h3>
        )}
        {/* {console.log('final students', studentsfinal)} */}
        {studentsattendance && (
          <Message variant='success' message={studentsattendance.message} />
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
              {studentlist.length > 0
                ? // {  <h1></h1>}
                  studentlist.map((student) => (
                    <tr key={student._id} className='attendance'>
                      <td>{i++}</td>
                      <td>{student.student_name}</td>
                      <td>{student.roll_no}</td>
                      <td
                        onClick={() => toggleAttendance(student._id)}
                        className={student.present ? 'present' : 'absent'}
                        style={{ cursor: 'pointer' }}
                      >
                        {student.present ? 'Present' : 'Absent'}
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
                        className={present[student._id] ? 'present' : 'absent'}
                        style={{ cursor: 'pointer' }}
                      >
                        {present[student._id] ? 'Present' : 'Absent'}
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        )}
        {studentsfinal && (
          <button
            onClick={submitAttendance}
            style={{ marginTop: '10px', maxWidth: '30%', display: 'block' }}
            disabled={studentlist.length > 0}
            className={
              studentlist.length > 0
                ? 'btn-register disable'
                : 'btn-register enable'
            }
          >
            Submit
          </button>
        )}
      </div>
    </div>
  )
}

export default StudentDeepAttendance
