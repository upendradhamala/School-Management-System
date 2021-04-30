import React, { Component } from 'react'
import NepaliDate from 'nepali-date-converter'

export default class Income extends Component {
  render() {
    // var allincome = []
    var i = 0
    return (
      <table>
        <thead>
          <tr>
            <th>SN</th>
            <th>Date</th>
            <th>Particulars</th>
          </tr>
        </thead>
        <tbody>
          {/* {allincome.map((value) => ( */}
          <tr key={this.props._id}>
            <td>{this.props.i}</td>

            <td>
              {new NepaliDate(new Date(this.props.createdAt)).format(
                'YYYY-MM-DD'
              )}
            </td>
            <td>
              Total Fees collected Rs{' '}
              {this.props.monthly_fees +
                this.props.hostel_fees +
                this.props.laboratory_fees +
                this.props.computer_fees +
                this.props.exam_fees +
                this.props.miscellaneous}{' '}
              from {this.props.student_name}
            </td>
          </tr>
          {/* ))} */}
        </tbody>
      </table>
    )
  }
}
