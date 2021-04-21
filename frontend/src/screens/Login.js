import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../actions/userActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
import './Login.css'
const Login = ({ history, location }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const redirect = location.search ? location.search.split('=')[1] : '/'
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userCred } = userLogin
  useEffect(() => {
    if (userCred) {
      console.log(userCred)
      // console.log('there is userCred')
      // console.log(userCred)
      history.push(redirect)
    }
  }, [history, userCred, redirect])
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
    // console.log('form submitted')
  }
  return (
    <div className='container'>
      <div className='layout'>
        <h1>Sign In</h1>
        {error && <Message variant='danger ' message={error} />}
        {loading ? (
          <Loader />
        ) : (
          <form onSubmit={submitHandler}>
            <input
              className='form-field'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email'
              required
            />
            <input
              className='form-field'
              type='text'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Password'
              required
            />
            <div className='remember-me'>
              <input type='checkbox' id='check' />
              <label htmlFor='check'>Remember me</label>
            </div>
            <button className='btn' type='submit'>
              Login
            </button>
          </form>
        )}

        {/* {} */}
      </div>
    </div>
  )
}

export default Login
