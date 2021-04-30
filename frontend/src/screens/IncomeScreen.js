import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
// import Message from '../components/Message'
import NepaliDate from 'nepali-date-converter'
import Income from '../components/Income'
import Message from '../components/Message'
// import link, { Link } from 'react-router-dom'
import {
  particularMonthYear,
  particularYear,
  alltillNow,
} from '../actions/miscellaneousActions'
import { ALL_INCOME_RESET } from '../constants/miscellaneousConstants'
const IncomeScreen = () => {
  const dispatch = useDispatch()
  const [particularmonth, setParticularmonth] = useState(false)
  const [
    particularmonthofparticularyear,
    setParticularmonthofparticularyear,
  ] = useState(false)
  const allIncome = useSelector((state) => state.allIncome)
  const { loading, allincome, error } = allIncome
  const [month, setMonth] = useState('')
  // const [error, setError] = useState('')
  const [all, setAll] = useState('')
  const [year, setYear] = useState('')
  const [particularyear, setParticularyear] = useState(false)
  // const [data, setData] = useState([])
  const Year = () => {
    setParticularmonth(false)
    setParticularmonthofparticularyear(false)
    setParticularyear(true)
    dispatch({ type: ALL_INCOME_RESET })
  }
  const singleValue = (arr) => {
    var newarray = []
    const reducer = (accumulator, currentValue) => accumulator + currentValue

    console.log('value of the array is', arr)
    arr.map((data) =>
      newarray.push(
        data.monthly_fees,
        data.hostel_fees,
        data.laboratory_fees,
        data.computer_fees,
        data.exam_fees,
        data.miscellaneous
      )
    )
    console.log('value of the array is', newarray)
    return newarray.reduce(reducer)
    // console.log('total income', totalincome)
  }
  const All = () => {
    dispatch({ type: ALL_INCOME_RESET })

    setParticularyear(false)
    setParticularmonthofparticularyear(false)
    setAll(true)
    dispatch(alltillNow())
  }
  var i = 1
  const both = () => {
    dispatch({ type: ALL_INCOME_RESET })

    setParticularyear(false)
    setParticularmonth(false)
    setParticularmonthofparticularyear(true)
  }
  useEffect(() => {
    dispatch({ type: ALL_INCOME_RESET })
  }, [dispatch])
  const formSubmit1 = async (e) => {
    e.preventDefault()
    dispatch({ type: ALL_INCOME_RESET })

    dispatch(particularMonthYear(year, month))
  }
  const formSubmit2 = async (e) => {
    e.preventDefault()
    dispatch({ type: ALL_INCOME_RESET })

    dispatch(particularYear(year))
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
            {/* {console.log(typeof data)} */}
            <button className='btn-search' type='submit'>
              Search
            </button>
          </form>
        </div>
      )}

      {/* below is for particular year */}
      {particularyear && (
        <div className='search-form'>
          <form onSubmit={formSubmit2}>
            <input
              className='first-input'
              type='text'
              value={year}
              placeholder='Enter the year such as 2070'
              onChange={(e) => setYear(e.target.value)}
              required
            />

            {/* {console.log(typeof data)} */}
            <button className='btn-search' type='submit'>
              Search
            </button>
          </form>
        </div>
      )}

      {/* {console.log(error)} */}
      <div className='allincomedetails' style={{ background: 'green' }}>
        {loading ? (
          <Loader />
        ) : allincome ? (
          // <table>
          //   <thead>
          //     <tr>
          //       <th>SN</th>
          //       <th>Date</th>
          //       <th>Particulars</th>
          //     </tr>
          //   </thead>
          //   <tbody>
          allincome.map((value) => (
            <Income
              _id={value._id}
              i={i++}
              createdAt={value.createdAt}
              monthly_fees={value.monthly_fees}
              hostel_fees={value.hostel_fees}
              laboratory_fees={value.laboratory_fees}
              computer_fees={value.computer_fees}
              exam_fees={value.exam_fees}
              miscellaneous={value.miscellaneous}
              student_name={value.student_name}
            />
            // <tr key={value._id}>
            //   <td>{i++}</td>

            //   <td>
            //     {new NepaliDate(new Date(value.createdAt)).format(
            //       'YYYY-MM-DD'
            //     )}
            //   </td>
            //   <td>
            //     Total Fees collected Rs{' '}
            //     {value.monthly_fees +
            //       value.hostel_fees +
            //       value.laboratory_fees +
            //       value.computer_fees +
            //       value.exam_fees +
            //       value.miscellaneous}{' '}
            //     from {value.student_name}
            //   </td>
            // </tr>
            // {}
          ))
        ) : (
          /* <table>
                <thead>
                  <tr>
                    <th>Total</th>
                  </tr>
                  <tbody>
                    <tr>
                      <td>d</td>
                    </tr>
                  </tbody>
                </thead>
              </table> */
          //   </tbody>
          // </table>
          error && <Message variant='danger' message={error} />
        )}
        {allincome && (
          <p style={{ background: 'pink', margin: '20px 0', padding: '10px' }}>
            Total Income made in this period = Rs {singleValue(allincome)}{' '}
          </p>
        )}
      </div>
    </div>
  )
}

export default IncomeScreen
