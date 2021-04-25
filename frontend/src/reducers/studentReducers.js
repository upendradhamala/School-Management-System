//following reducer is for displaying the list of all students of all classes
import {
  STUDENT_LIST_REQUEST,
  STUDENT_LIST_SUCCESS,
  STUDENT_LIST_FAIL,
  STUDENT_CLASS_LIST_REQUEST,
  STUDENT_CLASS_LIST_SUCCESS,
  STUDENT_CLASS_LIST_FAIL,
  STUDENT_SEARCH_REQUEST,
  STUDENT_SEARCH_SUCCESS,
  STUDENT_SEARCH_FAIL,
  STUDENT_REGISTER_REQUEST,
  STUDENT_REGISTER_SUCCESS,
  STUDENT_REGISTER_FAIL,
  STUDENT_DELETE_REQUEST,
  STUDENT_DELETE_SUCCESS,
  STUDENT_DELETE_FAIL,
  STUDENT_ATTENDANCE_REQUEST,
  STUDENT_ATTENDANCE_SUCCESS,
  STUDENT_ATTENDANCE_FAIL,
  STUDENT_ATTENDANCE_RESET,
  STUDENT_LIST_CLEAR,
  STUDENT_CLASS_LIST_CLEAR,
  STUDENT_SEARCH_CLEAR,
  STUDENT_FEES_REQUEST,
  STUDENT_FEES_SUCCESS,
  STUDENT_FEES_FAIL,
  STUDENT_FEES_RESET,
} from '../constants/studentConstants'
//following displays list of all students
export const studentListReducer = (state = { students: [] }, action) => {
  switch (action.type) {
    case STUDENT_LIST_REQUEST:
      return { loading: true, students: [] }
    case STUDENT_LIST_SUCCESS:
      return { loading: false, students: action.payload }
    case STUDENT_LIST_FAIL:
      return { loading: false, error: action.payload }
    case STUDENT_LIST_CLEAR:
      return {}
    default:
      return state
  }
}
//following displays list of all students belonging to the particular class
export const studentClassListReducer = (state = { students: [] }, action) => {
  switch (action.type) {
    case STUDENT_CLASS_LIST_REQUEST:
      return { loading: true, students: [] }
    case STUDENT_CLASS_LIST_SUCCESS:
      return { loading: false, students: action.payload }
    case STUDENT_CLASS_LIST_FAIL:
      return { loading: false, error: action.payload }
    case STUDENT_CLASS_LIST_CLEAR:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

//following is for searching the students for fees submission
export const studentSearchReducer = (state = {}, action) => {
  switch (action.type) {
    case STUDENT_SEARCH_REQUEST:
      return { loading: true, student: {} }
    case STUDENT_SEARCH_SUCCESS:
      return { loading: false, student: action.payload }
    case STUDENT_SEARCH_FAIL:
      return { loading: false, error: action.payload }
    case STUDENT_SEARCH_CLEAR:
      return {}
    default:
      return state
  }
}

//FOLLOWING IS FOR REGISTERING THE STUDENT

export const studentRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case STUDENT_REGISTER_REQUEST:
      return { loading: true }
    case STUDENT_REGISTER_SUCCESS:
      return { loading: false, success: action.payload }
    case STUDENT_REGISTER_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const studentDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case STUDENT_DELETE_REQUEST:
      return { loading: true }
    case STUDENT_DELETE_SUCCESS:
      return { loading: false, success: action.payload }
    case STUDENT_DELETE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
export const studentAttendanceReducer = (state = { students: [] }, action) => {
  switch (action.type) {
    case STUDENT_ATTENDANCE_REQUEST:
      return { loading: true }
    case STUDENT_ATTENDANCE_SUCCESS:
      return { loading: false, students: action.payload }
    case STUDENT_ATTENDANCE_FAIL:
      return { loading: false, error: action.payload }
    case STUDENT_ATTENDANCE_RESET:
      return {}
    default:
      return state
  }
}

//STUDENT FEES REDUCER
export const studentFeesReducer = (state = {}, action) => {
  switch (action.type) {
    case STUDENT_FEES_REQUEST:
      return { loading: true }
    case STUDENT_FEES_SUCCESS:
      return { loading: false, success: action.payload }
    case STUDENT_FEES_FAIL:
      return { loading: false, error: action.payload }
    case STUDENT_FEES_RESET:
      return {}
    default:
      return state
  }
}
