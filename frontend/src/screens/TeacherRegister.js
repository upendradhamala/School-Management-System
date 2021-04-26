import axios from 'axios'

import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { teacherregister } from '../actions/teacherActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
import './Student.css'
const TeacherRegister = ({ history }) => {
  const dispatch = useDispatch()
  const [uploading, setUploading] = useState(false)
  const [valid, setValid] = useState(false)
  const [time, setTime] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [previous_school, setPrevious_school] = useState('')

  const [gender, setGender] = useState('')
  const [phoneno, setPhoneno] = useState('')
  const [subjectToTeach, setSubjectToTeach] = useState('')

  const [qualification, setQualification] = useState('')
  const [age, setAge] = useState('')
  const [estimated_salary, setEstimated_salary] = useState('')
  const [image, setImage] = useState('')
  const uploadFileHandler = async (e) => {
    const { data: CLOUDINARY_URL } = await axios.get('/api/config/cloudinary')

    const { data: CLOUDINARY_UPLOAD_PRESET } = await axios.get(
      '/api/config/cloudinarypreset'
    )
    setTime(true)
    setTimeout(() => {
      setTime(false)
    }, 10000)
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)
    setUploading(true)
    await axios({
      url: CLOUDINARY_URL,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: formData,
    })
      .then(function (res) {
        setImage(res.data.url)
      })
      .catch(function (err) {
        console.error(err)
      })
    setUploading(false)
    console.log('url is', image)
  }
  const submitHandler = (e) => {
    e.preventDefault()
    setValid(true)
    dispatch(
      teacherregister(
        name.trim(),
        qualification,

        address,
        phoneno,
        gender,
        previous_school,
        age,
        email,
        estimated_salary,
        image,
        subjectToTeach
      )
    )
    setName('')
    setAddress('')
    // setImage('')
    setTimeout(() => {
      setValid(false)
    }, 10000)
  }
  const userLogin = useSelector((state) => state.userLogin)
  // const userLogin = useSelector((state) => state.userLogin)

  const { userCred } = userLogin

  // const studentRegister = useSelector((state) => state.studentRegister)
  const teacherRegister = useSelector((state) => state.teacherRegister)

  const { loading, success, error } = teacherRegister
  useEffect(() => {
    if (!userCred) {
      history.push('/login')
    }
  }, [userCred, history])
  return (
    <div className='container1' style={{ marginTop: '10px' }}>
      {loading ? (
        <Loader />
      ) : (
        <div className='outer-layout'>
          <h1>Register Teacher</h1>
          {success && valid && (
            <Message
              style={{ marginBottom: '3px' }}
              variant='success'
              message={success.message}
            />
          )}
          {valid && error && <Message variant='danger' message={error} />}

          <form onSubmit={submitHandler}>
            <div className='form-inner'>
              <div className='form-control'>
                <label htmlFor='name'>Full Name</label>
                <input
                  type='text'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className='form-control'>
                <label htmlFor='name'>Email</label>
                <input
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>{' '}
              <div className='form-control'>
                <label htmlFor='name'>Address</label>
                <input
                  type='text'
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>{' '}
              <div className='form-control'>
                <label htmlFor='name'>Previous School</label>
                <input
                  type='text'
                  value={previous_school}
                  onChange={(e) => setPrevious_school(e.target.value)}
                  required
                />
              </div>{' '}
              <div className='form-control'>
                <label htmlFor='name'>Subject To Teach</label>
                <input
                  type='text'
                  value={subjectToTeach}
                  onChange={(e) => setSubjectToTeach(e.target.value)}
                  required
                />
              </div>{' '}
              <div className='form-control'>
                <label htmlFor='name'>Gender</label>
                <select
                  required
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  {console.log(gender)}
                  <option value=''>Select Gender</option>
                  <option value='Male'>Male</option>

                  <option value='Female'>Female</option>
                  <option value='Others'>Others</option>
                </select>
              </div>{' '}
              <div className='form-control'>
                <label htmlFor='name'>Phone Number</label>
                <input
                  type='text'
                  value={phoneno}
                  onChange={(e) => setPhoneno(e.target.value)}
                  required
                />
              </div>{' '}
              <div className='form-control'>
                <label htmlFor='name'>Qualification</label>
                <input
                  type='text'
                  value={qualification}
                  onChange={(e) => setQualification(e.target.value)}
                  required
                />
              </div>
              {/* <div className='form-control'>
              <label htmlFor='name'>Joining Date</label>
              <input type='date' />
            </div>{' '} */}
              <div className='form-control'>
                <label htmlFor='name'>Age</label>
                <input
                  type='number'
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  required
                />
              </div>
              <div className='form-control'>
                <label htmlFor='registration-fees'>Salary </label>
                <input
                  type='number'
                  value={estimated_salary}
                  onChange={(e) => setEstimated_salary(e.target.value)}
                  required
                />
              </div>
              <div className='form-control'>
                <label htmlFor='name'>
                  Upload Picture
                  <input
                    className='custom-file-input'
                    onChange={uploadFileHandler}
                    type='file'
                    required
                  />
                </label>
                {uploading && <Loader />}
                {time && image && (
                  <Message
                    variant='success'
                    message='Picture uploaded successfully'
                  />
                )}
              </div>
              {/* <div className="register-btn"> */}
              {/* </div> */}
            </div>

            <button className='btn-register' type='submit'>
              Register Teacher
            </button>
          </form>
        </div>
      )}
    </div>
  )
}

export default TeacherRegister
