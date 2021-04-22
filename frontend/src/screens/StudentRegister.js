import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Register } from '../actions/studentActions'

import Loader from '../components/Loader'
import Message from '../components/Message'
import './Student.css'
const StudentRegister = ({ history }) => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [gender, setGender] = useState('')
  const [classname, setClassname] = useState('')
  const [phoneno, setPhoneno] = useState('')
  const [parentname, setParentname] = useState('')
  const [age, setAge] = useState('')
  const [registrationfees, setRegistraionfees] = useState('')
  const [image, setImage] = useState('')
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      Register(
        name,
        classname,
        address,
        parentname,
        phoneno,
        gender,
        age,
        email,
        registrationfees,
        image
      )
    )
    setName('')
    setAddress('')
  }
  const userLogin = useSelector((state) => state.userLogin)
  // const userLogin = useSelector((state) => state.userLogin)

  const { userCred } = userLogin

  // const studentRegister = useSelector((state) => state.studentRegister)
  const studentRegister = useSelector((state) => state.studentRegister)

  const { loading, success, error } = studentRegister
  useEffect(() => {
    if (!userCred) {
      history.push('/login')
    }
  }, [userCred, history])
  return (
    <div className='container1' style={{ marginTop: '10px' }}>
      <div className='outer-layout'>
        <h1>Register Student</h1>
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
              <label htmlFor='name'>Class</label>
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
              <label htmlFor='name'>Parent's Name</label>
              <input
                type='text'
                value={parentname}
                onChange={(e) => setParentname(e.target.value)}
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
              <label htmlFor='registration-fees'>Registration Fees</label>
              <input
                type='number'
                value={registrationfees}
                onChange={(e) => setRegistraionfees(e.target.value)}
                required
              />
            </div>
            <div className='form-control'>
              <label htmlFor='name'>
                Upload Picture
                <input
                  className='custom-file-input'
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  type='file'
                  required
                />
              </label>
            </div>
            {/* <div className="register-btn"> */}
            {/* </div> */}
          </div>
          <button className='btn-register' type='submit'>
            Register Student
          </button>
        </form>
        {loading && <Loader />}
        {error && <Message variant='danger' message={error} />}
        {success && <Message variant='success' message={success.message} />}
      </div>
    </div>
  )
}

export default StudentRegister
