import React from 'react'
import CountUp from 'react-countup'
const Counter = ({ upperlimit }) => {
  return (
    <div>
      <CountUp end={upperlimit} duration={2} />
    </div>
  )
}

export default Counter
