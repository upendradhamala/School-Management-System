//this is the most important file for using the redux as state management tool
//this file should be created directly in the frontend folder
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { studentListReducer } from './reducers/studentReducers'
import { userLoginReducer } from './reducers/userReducers'
import {
  studentClassListReducer,
  studentSearchReducer,
  studentRegisterReducer,
  studentDeleteReducer,
  studentAttendanceReducer,
  studentFeesReducer,
} from './reducers/studentReducers'
import {
  allIncomeReducer,
  allSalaryReducer,
} from './reducers/miscellaneousReducers'
import {
  teacherSalaryReducer,
  teacherRegisterReducer,
  teacherDeleteReducer,
  teacherListReducer,
} from './reducers/teacherReducers'
import {
  staffSalaryReducer,
  staffRegisterReducer,
  staffDeleteReducer,
  staffListReducer,
} from './reducers/staffReducers'
const reducer = combineReducers({
  studentList: studentListReducer,
  studentClassList: studentClassListReducer,
  studentSearch: studentSearchReducer,
  userLogin: userLoginReducer,
  studentRegister: studentRegisterReducer,
  studentDelete: studentDeleteReducer,
  studentAttendance: studentAttendanceReducer,
  studentFees: studentFeesReducer,
  teacherSalary: teacherSalaryReducer,
  teacherRegister: teacherRegisterReducer,
  teacherDelete: teacherDeleteReducer,
  teacherList: teacherListReducer,
  staffSalary: staffSalaryReducer,
  staffRegister: staffRegisterReducer,
  staffDelete: staffDeleteReducer,
  staffList: staffListReducer,
  allIncome: allIncomeReducer,
  allSalary: allSalaryReducer,
})
const userInfoFromStorage = localStorage.getItem('userCred')
  ? JSON.parse(localStorage.getItem('userCred'))
  : null

//remember the above should be null
const initialState = {
  userLogin: { userCred: userInfoFromStorage },
}
const middleware = [thunk]
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
