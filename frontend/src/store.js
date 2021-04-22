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
} from './reducers/studentReducers'

const reducer = combineReducers({
  studentList: studentListReducer,
  studentClassList: studentClassListReducer,
  studentSearch: studentSearchReducer,
  userLogin: userLoginReducer,
  studentRegister: studentRegisterReducer,
  studentDelete: studentDeleteReducer,
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
