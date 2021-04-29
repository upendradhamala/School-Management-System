import React, { useState, useEffect } from 'react'

import link, { Link } from 'react-router-dom'
const IncomeScreen = () => {
  const [particularmonth, setParticularmonth] = useState(false)
  const [
    particularmonthofparticularyear,
    setParticularmonthofparticularyear,
  ] = useState(false)
  const [month, setMonth] = useState('')
  const [all, setAll] = useState('')
  const [year, setYear] = useState('')
  const [particularyear, setParticularyear] = useState(false)

  const Year = () => {
    setParticularmonth(false)
    setParticularmonthofparticularyear(false)
    setParticularyear(true)
  }
  const All = () => {
    setParticularyear(false)
    setParticularmonthofparticularyear(false)
    setAll(true)
  }
  const both = () => {
    setParticularyear(false)
    setParticularmonth(false)
    setParticularmonthofparticularyear(true)
  }
  const formSubmit1 = (e) => {
    e.preventDefault()
  }
  return (
    <div className='container1'>
      <h2 className='income-h1'> Income statements</h2>
      <div className='income-button'>
        <button onClick={All} className='link'>
          All till Date
        </button>
        <button onClick={Year} className='link'>
          Particular Year
        </button>

        <button onClick={both} className='link'>
          Particular Month of Particular Year
        </button>
      </div>
      {particularmonthofparticularyear && (
        <div className='search-form'>
          {/* <h4>Search for Student to pay fees</h4> */}

          <form onSubmit={formSubmit1}>
            <input
              className='first-input'
              type='text'
              value={year}
              placeholder='Enter the year such as 2070'
              onChange={(e) => setYear(e.target.value)}
              required
            />
            <select
              id='class'
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              required
            >
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
            </select>

            <button className='btn-search' type='submit'>
              Search
            </button>
          </form>
        </div>
      )}
      <div className='allincomedetails'></div>
    </div>
  )
}

export default IncomeScreen
