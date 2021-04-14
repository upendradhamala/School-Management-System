import React from 'react'
import CountUp from 'react-countup'
const Counter = ({ upperlimit }) => {
  return (
    <div>
      <CountUp end={upperlimit} duration={1} />
    </div>
  )
}

export default Counter
