import React, { useState } from 'react'
import Landing from './screens/Landing'
// import { Button } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './screens/Login'
import StudentRegister from './screens/StudentRegister'
import StudentFees from './screens/StudentFees'
import StudentDetails from './screens/StudentDetails'
import StudentDeepDetails from './screens/StudentDeepDetails'
import StudentAttendance from './screens/StudentAttendance'
const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/' component={Landing} exact />
          <Route path='/login' component={Login} exact />
          <Route path='/student-register' component={StudentRegister} />
          <Route path='/student-fee' component={StudentFees} />
          <Route path='/student_details' component={StudentDetails} exact />
          <Route
            path='/student_details/details'
            component={StudentDeepDetails}
            exact
          />
          <Route
            path='/student_attendance/:class'
            component={StudentAttendance}
            exact
          />
        </Switch>
      </div>
    </Router>
  )
}

export default App
