//following reducer is for displaying the list of all students of all classes
import {
  STUDENT_LIST_REQUEST,
  STUDENT_LIST_SUCCESS,
  STUDENT_LIST_FAIL,
  STUDENT_CLASS_LIST_REQUEST,
  STUDENT_CLASS_LIST_SUCCESS,
  STUDENT_CLASS_LIST_FAIL,
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
    default:
      return state
  }
}
