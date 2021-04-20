//this is the most important file for using the redux as state management tool
//this file should be created directly in the frontend folder
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { studentListReducer } from './reducers/studentReducers'
const reducer = combineReducers({
  studentList: studentListReducer,
})
const initialState = {}
const middleware = [thunk]
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
