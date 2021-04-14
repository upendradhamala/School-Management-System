import React from 'react'
import './Login.css'
const Login = () => {
  return (
    <div className='container'>
      <div className='layout'>
        <h1>Sign In</h1>

        <input className='form-field' type='text' placeholder='Username' />
        <input className='form-field' type='text' placeholder='Password' />
        <div className='remember-me'>
          <input type='checkbox' id='check' />
          <label htmlFor='check'>Remember me</label>
        </div>
        <button className='btn' type='submit'>
          Login
        </button>
      </div>
    </div>
  )
}

export default Login
