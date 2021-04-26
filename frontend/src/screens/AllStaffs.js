import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listStaffs } from '../actions/staffActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { deleteStaff } from '../actions/staffActions'

const AllStaffs = ({}) => {
  const dispatch = useDispatch()
  const staffList = useSelector((state) => state.staffList)
  const { loading, staffs, error } = staffList
  const staffDelete = useSelector((state) => state.staffDelete)
  const {
    loading: loadingDelete,
    success: successDelete,
    error: errorDelete,
  } = staffDelete
  // const matchid = match.params.id
  useEffect(() => {
    dispatch(listStaffs())
  }, [dispatch, successDelete])
  const deleteHandler = (id) => {
    if (window.confirm('Are you sure?')) {
      dispatch(deleteStaff(id))
    }
  }
  var i = 1

  const searchSubmit = (e) => {
    e.preventDefault()
    console.log('clicked')
  }
  // const loading1=true
  // const staffs = []
  return (
    <div className='container3'>
      <div className='outer'>
        <input type='text' placeholder='Search for staff...' />
        <span className='search-icon' onClick={searchSubmit}>
          <i className='fas fa-search'></i>
        </span>

        <div className='table-layout'>
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant='danger' message={error} />
          ) : (
            <table>
              <thead>
                <tr>
                  <th>SN</th>
                  {/* <th>ID</th> */}
                  <th>Photo</th>
                  <th>Staff Name</th>
                  <th>Qualification</th>
                  <th>Staff Id</th>
                  <th>Address</th>
                  <th>Work</th>
                  <th>Contact No</th>
                  <th>Previous School</th>
                  <th>Age</th>

                  <th>Salary</th>
                  <th>Gender</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {/* {match.params.id===data.id && */}
                {/* {console.log(matchid)} */}
                {/* {"A"==="A" ?():(

)} */}
                {/* for displaying the information about the particular class
only we first should have the data of that class only 
. We cannot make selection inside the map method by using double and operator. */}
                {staffs.map((data) => (
                  <tr key={data._id} className='contents'>
                    <td>{i++}</td>
                    {/* <td>{data._id}</td> */}
                    <td>
                      <img style={{ height: '50px' }} src={data.image} alt='' />
                    </td>
                    <td>{data.staff_name}</td>
                    <td>{data.qualification}</td>
                    <td>{data.staffId}</td>
                    {/* <td>{data.roll_no}</td> */}

                    <td>{data.address}</td>
                    <td>{data.work}</td>
                    <td>{data.contact_no}</td>
                    <td>{data.previous_school}</td>
                    <td>{data.age}</td>
                    <td>{data.estimated_salary}</td>

                    <td>{data.gender}</td>
                    <td>
                      <i
                        style={{
                          padding: '8px',
                          color: 'green',
                          fontSize: '25px',
                        }}
                        className='fas fa-user-edit'
                      ></i>
                    </td>
                    <td>
                      <i
                        style={{
                          padding: '8px',
                          color: 'red',
                          fontSize: '25px',
                          cursor: 'pointer',
                        }}
                        onClick={() => deleteHandler(data.staffId)}
                        className='fas fa-trash'
                      ></i>
                    </td>
                  </tr>

                  // }
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  )
}

export default AllStaffs
