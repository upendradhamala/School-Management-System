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
import AllStudents from './screens/AllStudents'
import StudentDeepAttendance from './screens/StudentDeepAttendance'
import StudentAdmitCard from './screens/StudentAdmitCard'
import AllStudentsAdmitCard from './screens/AllStudentsAdmitCard'
import StudentClassAdmitCard from './screens/StudentClassAdmitCard'
import StudentClassAdmitCardDeep from './screens/StudentClassAdmitCardDeep'

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
            path='/student_details/details/:id'
            component={StudentDeepDetails}
            exact
          />
          <Route
            path='/student-attendance'
            component={StudentAttendance}
            exact
          />
          <Route
            path='/student-attendance/:class'
            component={StudentDeepAttendance}
            exact
          />
          <Route path='/students' component={AllStudents} exact />
          <Route path='/admit_card' component={StudentAdmitCard} exact />
          <Route
            path='/admit_card/allstudents'
            component={AllStudentsAdmitCard}
            exact
          />
          <Route
            path='/admit_card/classes'
            component={StudentClassAdmitCard}
            exact
          />
          <Route
            path='/admit_card/classes/:id'
            component={StudentClassAdmitCardDeep}
            exact
          />
        </Switch>
      </div>
    </Router>
  )
}

export default App
