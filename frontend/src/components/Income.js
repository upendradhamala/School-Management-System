import React, { Component } from 'react'
import NepaliDate from 'nepali-date-converter'

export default class Income extends Component {
  render() {
    // var allincome = []
    var i = 0
    return (
      <div className='innerIncome'>
        <p>{this.props.i}</p>
        <p>
          {new NepaliDate(new Date(this.props.createdAt)).format('YYYY-MM-DD')}
        </p>
        <p>
          Total Fees collected Rs{' '}
          {this.props.monthly_fees +
            this.props.hostel_fees +
            this.props.laboratory_fees +
            this.props.computer_fees +
            this.props.exam_fees +
            this.props.miscellaneous}{' '}
          from {this.props.student_name}
        </p>
      </div>
    )
  }
}
