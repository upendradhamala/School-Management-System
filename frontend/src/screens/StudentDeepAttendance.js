import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { classlistStudent } from '../actions/studentActions'
import NepaliDate from 'nepali-date-converter'
import Loader from '../components/Loader'
import Message from '../components/Message'
const StudentDeepAttendance = ({ match }) => {
  const matchid = match.params.class
  //   console.log(matchid)
  const [present, setPresent] = useState(false)
  const dispatch = useDispatch()
  const studentClassList = useSelector((state) => state.studentClassList)
  const { loading, students, error } = studentClassList
  useEffect(() => {
    dispatch(classlistStudent(matchid))
  }, [dispatch, matchid])
  var i = 1
  const toggleAttendance = () => {
    setPresent(!present)
    console.log(present)
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
              {students &&
                students.map((student) => (
                  <tr key={student._id} className='attendance'>
                    <td>{i++}</td>
                    <td>{student.student_name}</td>
                    <td>{student.roll_no}</td>
                    <td
                      onClick={toggleAttendance}
                      className={present ? 'present' : 'absent'}
                      style={{ cursor: 'pointer' }}
                    >
                      {present ? 'Present' : 'Absent'}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}

export default StudentDeepAttendance
