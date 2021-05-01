import React from 'react'

export class AdmitCard extends React.Component {
  render() {
    return (
      <div className='admitCardouter'>
        <div className='admitCard'>
          <div className='admitCardTop'>
            <img src='/images/schoollogo.jpeg' alt='logo' />
            <div className='schooldetails'>
              <h2>Hope International Academy</h2>
              <h4>{this.props.examination}</h4>
            </div>
          </div>

          <div className='admitCardMiddle'>
            <h3 style={{ textAlign: 'center' }}>Student Details</h3>
            <div className='details'>
              <div className='left-details'>
                <p>Name</p>
                <p>Class</p>
                <p>Roll No</p>
              </div>
              <div className='right-details'>
                <p>{this.props.name}</p>
                <p>{this.props.classname}</p>
                <p>{this.props.rollno}</p>
              </div>
              <img src={this.props.image} alt='' />
            </div>
          </div>
          <div className='admitCardBottom' style={{ textAlign: 'center' }}>
            <h4>In case any problem occurs, contact your school.</h4>
            {/* <h4>In case any problem occurs, contact your school.</h4> */}
          </div>
        </div>
      </div>
    )
  }
}
export default AdmitCard
